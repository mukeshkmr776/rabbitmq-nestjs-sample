import { NestFactory } from '@nestjs/core';
import { SubscriberModule } from './subscriber.module';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

const configService  = new ConfigService();
const RABBITMQ_URL   = configService.get('RABBITMQ_URL')   || 'amqp://localhost:5672';
const RABBITMQ_QUEUE = configService.get('RABBITMQ_QUEUE') || 'my-subscribers';

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
