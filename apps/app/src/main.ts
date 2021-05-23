import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

// Loading Environment variables
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT
  await app.listen(Number(PORT));
  console.log(`Server started at port ${PORT}`);
}
bootstrap();
