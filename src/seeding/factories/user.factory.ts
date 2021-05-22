import * as faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '@app/entities';

define(User, () => {
  const user = new User();
  user.username = faker.name.firstName();
  user.password = '1234';
  return user;
});
