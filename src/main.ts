import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('API_PORT');

  const sessionConfig = {
    secret: 'reap-demo',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false, sameSite: 'none' as any },
  };
  if (configService.get('NODE_ENV') === 'production') {
    app.set('trust proxy', 1);
    sessionConfig.cookie.secure = true;
  }
  app.use(session(sessionConfig));

  await app.listen(port);
}
bootstrap();
