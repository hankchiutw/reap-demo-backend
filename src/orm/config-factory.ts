import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import { User } from '@app/entities';

export const configFactory = (
  configService: ConfigService,
): ConnectionOptions => ({
  type: 'sqlite',
  database: configService.get('SQLITE_DB'),
  entities: [User],
  logging: true,
  synchronize: true,
});
