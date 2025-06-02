import * as crypto from 'crypto';
(global as any).crypto = crypto;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
origin: ['https://prol-educa-take-off.vercel.app', 'http://localhost:4200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Se você precisar enviar cookies ou cabeçalhos de autorização
});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
