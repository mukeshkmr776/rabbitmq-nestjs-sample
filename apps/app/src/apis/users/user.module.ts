import { Module } from '@nestjs/common';
import { RabbitMQModule } from '../../modules/rabbitmq/rabbit-mq.module';
import { UserController } from './user.controller';

@Module({
  imports: [RabbitMQModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
