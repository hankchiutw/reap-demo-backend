import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('API_PORT');

  app.use(
    session({
      secret: 'reap-demo',
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(port);
}
bootstrap();
