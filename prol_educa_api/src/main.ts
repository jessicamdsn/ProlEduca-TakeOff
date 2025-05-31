import * as crypto from 'crypto';
(global as any).crypto = crypto;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';




dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: '*',  // permite qualquer origem (pode ser ajustado para um domínio específico)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  allowedHeaders: ['Content-Type', 'Authorization'],
});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
