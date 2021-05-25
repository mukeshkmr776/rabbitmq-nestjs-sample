import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join, resolve } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from './rabbit-mq.module';
import * as ConfigurationService from '@common/configuration.service';

const SERVER_BASE_API = ConfigurationService.getEnvironment('SERVER_BASE_API');

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(join(__dirname, '..', '..', '..', 'static')),
      exclude: [SERVER_BASE_API + '*'],
    }),
    RabbitMQModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
