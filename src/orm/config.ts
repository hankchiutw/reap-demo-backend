import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

export const rootConfigFactory = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> =>
  Object.assign(await getConnectionOptions(), {
    entities: [],
    autoLoadEntities: true,
    synchronize: configService.get('NODE_ENV') !== 'production',
  });

export const testConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  autoLoadEntities: true,
  synchronize: true,
};
