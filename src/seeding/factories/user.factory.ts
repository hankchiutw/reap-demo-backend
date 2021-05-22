import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '@app/entities';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.username = faker.name.firstName();
  user.password = '1234';
  return user;
});
