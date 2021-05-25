import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { SubscriberModule } from './subscriber.module';
import * as ConfigurationService from '@common/configuration.service';

const RABBITMQ_URL = ConfigurationService.getEnvironment('RABBITMQ_URL');
const RABBITMQ_QUEUE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SubscriberModule, {
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: RABBITMQ_QUEUE,
      noAck: false,
      prefetchCount: 1,
      queueOptions: {
        durable: true,
        autoDelete: true,
      },
    },
  });
  await app.listenAsync();
}
bootstrap();
