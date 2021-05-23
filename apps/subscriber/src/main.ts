import { NestFactory } from '@nestjs/core';
import { SubscriberModule } from './subscriber.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

// Loading Environment variables
dotenv.config();

const RABBITMQ_URL   = process.env.RABBITMQ_URL;
const RABBITMQ_QUEUE = process.env.RABBITMQ_QUEUE;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SubscriberModule, {
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: RABBITMQ_QUEUE,
      noAck: false,
      prefetchCount: 1,
    },
  });
  await app.listenAsync();
}
bootstrap();
