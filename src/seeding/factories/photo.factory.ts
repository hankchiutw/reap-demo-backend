import * as fse from 'fs-extra';
import * as faker from 'faker';
import { define } from 'typeorm-seeding';
import { Photo } from '@app/entities';

fse.ensureDirSync(process.env.FILE_UPLOAD_DEST);

define(Photo, () => {
  const photo = new Photo();
  photo.originalname = faker.system.commonFileName('jpg');

  const destPath = process.env.FILE_UPLOAD_DEST;
  photo.path = `${destPath}/${photo.originalname}`;
  photo.size = faker.datatype.number();
  photo.description = faker.lorem.sentence();
  photo.createdAt = faker.date.past();

  return photo;
});
