import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class SubscriberService {
  onUserAdd(data: Record<string, any>, context: RmqContext) {
    console.log('data - ', data);

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
}
