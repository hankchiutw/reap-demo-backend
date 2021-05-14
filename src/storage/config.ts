import { ConfigService } from '@nestjs/config';
import { MulterModuleOptions } from '@nestjs/platform-express';

export const configFactory = (
  configService: ConfigService,
): MulterModuleOptions => ({
  dest: configService.get('FILE_UPLOAD_DEST'),
});
