import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('API_PORT');
  if (!port) {
    throw new Error('Please set API_PORT in .env');
  }
  await app.listen(port);
}
bootstrap();
