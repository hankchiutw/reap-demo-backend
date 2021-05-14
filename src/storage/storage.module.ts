import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { configFactory } from './config';
import { StorageService } from './storage.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: configFactory,
      inject: [ConfigService],
    }),
  ],
  providers: [StorageService],
  exports: [StorageService, MulterModule],
})
export class StorageModule {}
