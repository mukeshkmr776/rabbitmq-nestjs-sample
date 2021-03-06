import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from './rabbit-mq.service';
import * as ConfigurationService from '@common/configuration.service';

const RABBITMQ_URL = ConfigurationService.getEnvironment('RABBITMQ_URL');
const RABBITMQ_QUEUE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE');
const RABBITMQ_QUEUE_DURABLE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE_DURABLE');
const RABBITMQ_QUEUE_AUTODELETE = ConfigurationService.getEnvironment('RABBITMQ_QUEUE_AUTODELETE');

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBSCRIBERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [RABBITMQ_URL],
          queue: RABBITMQ_QUEUE,
          queueOptions: {
            durable: RABBITMQ_QUEUE_DURABLE,
            autoDelete: RABBITMQ_QUEUE_AUTODELETE,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
