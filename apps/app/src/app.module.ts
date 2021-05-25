import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join, resolve } from 'path';

import * as ConfigurationService from '@common/configuration.service';
import { RabbitMQModule } from './rabbit-mq.module';
import { UserModule } from './apis/users/user.module';

const SERVER_BASE_API = ConfigurationService.getEnvironment('SERVER_BASE_API');

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(join(__dirname, '..', '..', '..', 'static')),
      exclude: [SERVER_BASE_API + '*'],
    }),
    RabbitMQModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
  exports: [RabbitMQModule],
})
export class AppModule {}
