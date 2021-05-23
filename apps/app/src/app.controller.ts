import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  getHello(): string {
    this.rabbitMQService.send('add-user', {
      message: this.appService.getHello(),
      date: Date.now().toString(),
    });
    return 'Message sent to the queue! ' + Date.now();
  }
}
