import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get('API_PREFIX'));
  const port = configService.get('API_PORT');

  const sessionConfig = {
    secret: 'reap-demo',
    resave: false,
    saveUninitialized: false,
  };
  if (configService.get('NODE_ENV') === 'production') {
    app.set('trust proxy', 1);
  }
  app.use(session(sessionConfig));

  await app.listen(port);
}
bootstrap();
