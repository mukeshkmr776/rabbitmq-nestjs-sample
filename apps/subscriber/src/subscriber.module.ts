import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';

@Module({
  imports: [ConfigModule],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {}
