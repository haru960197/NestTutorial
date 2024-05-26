import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';

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

  @Post("")
  async add(@Body() task: CreateTaskDto) {
    const result = await this.prisma.task.create({
      data: task,
    });

    return {
      status: "OK",
    }
  }
}
