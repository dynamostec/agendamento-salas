import { NestFactory } from '@nestjs/core';
import { AppModule } from './modulos/app.module';
import { HttpExceptionFilter } from './camada_controller/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3001);
}
bootstrap();
