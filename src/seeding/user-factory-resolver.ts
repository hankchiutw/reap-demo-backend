import * as fs from 'fs';
import * as faker from 'faker';
import fetch, { Response } from 'node-fetch';
import { User, Photo } from '@app/entities';
import { Factory } from 'typeorm-seeding';

const PHOTO_COUNT_MIN_DEFAULT = 5;
const PHOTO_COUNT_MAX_DEFAULT = 20;

interface UserFactoryOptions {
  userCount?: number;
}

export const userFactoryResolver = (factory: Factory) => async (
  payload: Partial<User> = {},
  options: UserFactoryOptions = {},
) => {
  const { userCount = 1 } = options;
  for (let i = 0; i < userCount; i++) {
    await createOneUser(factory, payload);
  }
};

async function createOneUser(
  factory: Factory,
  payload: Partial<User> = {},
): Promise<void> {
  const photoCount = faker.datatype.number({
    min: PHOTO_COUNT_MIN_DEFAULT,
    max: PHOTO_COUNT_MAX_DEFAULT,
  });

  const photos = await factory(Photo)().createMany(photoCount);
  console.log('generating photos:', photoCount);
  await Promise.all(
    photos.map((photo) => {
      return genImage(photo.path).then(({ size }) => {
        photo.size = size;
        console.log('generated image:', photo.path, size);
      });
    }),
  );
  await factory(User)().create({
    photos,
    ...payload,
  });
}

async function genImage(filePath: string): Promise<{ size: number }> {
  let res: Response;
  while (!res) {
    const url = (faker.image as any).lorempicsum.image(200, 150);
    res = await fetch(url).catch(() => {
      console.log('retry fetch url');
      return null;
    });
  }

  const stream = fs.createWriteStream(filePath);

  res.body.pipe(stream);
  return new Promise((resolve) => {
    let size = 0;
    res.body.on('data', (chunk) => {
      size += chunk.length;
    });
    stream.on('finish', () => resolve({ size }));
  });
}
