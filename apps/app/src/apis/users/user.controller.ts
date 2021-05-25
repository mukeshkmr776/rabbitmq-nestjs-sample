import { Controller, Get } from '@nestjs/common';
import { RabbitMQService } from '../../rabbit-mq.service';

@Controller()
export class UserController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Get('/hello')
  async getHello() {
    const message = 'hello world';
    try {
      await this.rabbitMQService.send('add-user', message);
      console.log('Success...!!');
    } catch (error) {
      console.log('Error - ', error);
    }
    return `Message sent to the queue - "${message}"`;
  }
}
