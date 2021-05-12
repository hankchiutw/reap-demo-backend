import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
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

  static forFeature = TypeOrmModule.forFeature;

  static forTest() {
    return TypeOrmModule.forRoot(testConfig);
  }
}
