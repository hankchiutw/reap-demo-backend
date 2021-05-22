import { Factory, Seeder } from 'typeorm-seeding';
import { userFactoryResolver } from './user-factory-resolver';

export class CreateUser implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const userFactory = userFactoryResolver(factory);
    await userFactory({
      username: 'hank',
      password: 'hank',
    });
    await userFactory({
      username: 'guest',
      password: 'guest',
    });

    await userFactory(null, { userCount: 2 });
  }
}
