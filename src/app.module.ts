import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ErrorMessageInterceptor } from './core';
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
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorMessageInterceptor,
    },
  ],
})
export class AppModule {}
