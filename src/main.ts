import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // デコレータでバリデーション定義が可能になる
  app.useGlobalPipes(
    new ValidationPipe()
  )

  await app.listen(3000);
}
bootstrap();
