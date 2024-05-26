import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // デコレータでバリデーション定義が可能になる
  // バリデーションの時、クリアしたものを受け取る時の両方で型変換が必要
  app.useGlobalPipes(
    new ValidationPipe({
      // バリデーションをクリアしたオブジェクトをDTOに従って型変換
      transform: true,
      // 型変換をしてからバリデーションチェックを行う(string -> number)
      transformOptions: { enableImplicitConversion: true },
    })
  )

  await app.listen(3000);
}
bootstrap();
