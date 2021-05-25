import { Controller, Get, Param } from '@nestjs/common';
import { RabbitMQService } from '../../modules/rabbitmq/rabbit-mq.service';

@Controller('/user')
export class UserController {
  users: string[] = [];

  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Get()
  async getUserList() {
    return this.users;
  }

  @Get(':id')
  async getHello(@Param('id') id: string) {
    if (this.users.indexOf(id) < 0) {
      this.users.push(id);
    }
    try {
      const message = 'hello ' + id;
      await this.rabbitMQService.send('add-user', message);
      return `Message sent to the queue - "${message}"`;
    } catch (error) {
      console.log('Error - ', error);
    }
  }
}
