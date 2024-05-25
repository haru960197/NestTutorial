import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('todo') // コントローラクラスの宣言とパスの指定(http://localhost:3000/todo)
export class TodoController {

  constructor(
    private prisma: PrismaService
  ){}

  @Get("list") // HTTPメソッドとパスの指定(http://localhost:3000/todo/list)
  async getList() {
    const result = await this.prisma.task.findMany();

    // ここで return した内容が response になる
    return [
      ...result,
    ];
  }
}
