import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { SubscriberModule } from './subscriber.module';
import * as ConfigurationService from '@common/configuration.service';

ConfigurationService.validate();

const RABBITMQ_URL = ConfigurationService.getEnvironment('RABBITMQ_URL');
const RABBITMQ_QUEUE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE');
const RABBITMQ_QUEUE_DURABLE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE_DURABLE');
const RABBITMQ_QUEUE_AUTODELETE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE_AUTODELETE');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SubscriberModule, {
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: RABBITMQ_QUEUE,
      noAck: false,
      prefetchCount: 1,
      queueOptions: {
        durable: RABBITMQ_QUEUE_DURABLE,
        autoDelete: RABBITMQ_QUEUE_AUTODELETE,
      },
    },
  });
  await app.listenAsync();
}
bootstrap();
