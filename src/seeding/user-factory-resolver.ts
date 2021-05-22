import * as fs from 'fs';
import * as faker from 'faker';
import fetch from 'node-fetch';
import { User, Photo } from '@app/entities';
import { Factory } from 'typeorm-seeding';

const PHOTO_COUNT_MIN_DEFAULT = 5;
const PHOTO_COUNT_MAX_DEFAULT = 20;
const DEBOUNCE_DURATION = 500;

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
  for (const photo of photos) {
    const { size } = await genImage(photo.path);
    photo.size = size;
    console.log('generated image:', photo.path, size);
    await new Promise((resolve) => setTimeout(resolve, DEBOUNCE_DURATION));
  }
  await factory(User)().create({
    photos,
    ...payload,
  });
}

async function genImage(filePath: string): Promise<{ size: number }> {
  const url = (faker.image as any).lorempicsum.image(200, 150);
  const res = await fetch(url);

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
