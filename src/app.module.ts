import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api';

@Module({
  imports: [ConfigModule.forRoot(), ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
