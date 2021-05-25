import { NestFactory } from '@nestjs/core';
import * as ConfigurationService from '@common/configuration.service';
ConfigurationService.validate();

import { AppModule } from './app.module';

async function bootstrap() {
  const SERVER_PORT = ConfigurationService.getEnvironment('SERVER_PORT');
  const SERVER_BASE_API = ConfigurationService.getEnvironment('SERVER_BASE_API');

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(SERVER_BASE_API);

  await app.listen(SERVER_PORT);
  console.log(`Server is running on: ${await app.getUrl()}`);
}
bootstrap();
