import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { configFactory } from './config-factory';

@Module({
  providers: [],
})
export class OrmModule {
  static forRoot() {
    return TypeOrmModule.forRootAsync({
      useFactory: configFactory,
      inject: [ConfigService],
    });
  }

  static forFeature = TypeOrmModule.forFeature;
}
