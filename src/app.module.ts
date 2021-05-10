import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api';
import { OrmModule } from './orm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.default'],
      isGlobal: true,
    }),
    OrmModule.forRoot(),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
