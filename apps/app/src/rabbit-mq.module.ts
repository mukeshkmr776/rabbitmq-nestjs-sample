import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RabbitMQService } from './rabbit-mq.service';

const configService  = new ConfigService();
const RABBITMQ_URL   = configService.get('RABBITMQ_URL')   || 'amqp://localhost:5672';
const RABBITMQ_QUEUE = configService.get('RABBITMQ_QUEUE') || 'my-subscribers';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBSCRIBERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [RABBITMQ_URL],
          queue: RABBITMQ_QUEUE,
        },
      },
    ]),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
