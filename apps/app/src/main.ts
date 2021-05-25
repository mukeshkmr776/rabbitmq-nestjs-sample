import { NestFactory } from '@nestjs/core';
import * as ConfigurationService from '@common/configuration.service';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = ConfigurationService.getEnvironment('PORT');
  await app.listen(Number(PORT));
  console.log(`Server started at port ${PORT}`);
}
bootstrap();
