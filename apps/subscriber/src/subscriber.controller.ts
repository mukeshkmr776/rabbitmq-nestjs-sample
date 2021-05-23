import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

import { SubscriberService } from './subscriber.service';

@Controller()
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @MessagePattern('add-user')
  public async addUser(@Payload() data: any, @Ctx() context: RmqContext) {
    this.subscriberService.onUserAdd(data, context);
  }
}
