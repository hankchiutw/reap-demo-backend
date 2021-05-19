import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const rootConfigFactory = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: configService.get('SQLITE_DB'),
  autoLoadEntities: true,
  logging: true,
  synchronize: configService.get('NODE_ENV') !== 'production',
});

export const testConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  autoLoadEntities: true,
  synchronize: true,
};
