import { Controller, Get } from '@nestjs/common';

@Controller('todo') // コントローラクラスの宣言とパスの指定(http://localhost:3000/todo)
export class TodoController {

  @Get("list") // HTTPメソッドとパスの指定(http://localhost:3000/todo/list)
  getList() {
    // ここで return した内容が response になる
    return [
      {
        title: "牛乳を買いに行く",
        due_on: "2024-05-26",
        done: false,
      },
    ];
  }
}
