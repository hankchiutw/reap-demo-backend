import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User, Photo } from '@app/entities';
import { rootConfigFactory, testConfig } from './config';

@Module({
  providers: [],
})
export class OrmModule {
  static forRoot() {
    return TypeOrmModule.forRootAsync({
      useFactory: rootConfigFactory,
      inject: [ConfigService],
    });
  }

  static forFeature() {
    return TypeOrmModule.forFeature([User, Photo]);
  }

  static forTest() {
    return TypeOrmModule.forRoot(testConfig);
  }
}
