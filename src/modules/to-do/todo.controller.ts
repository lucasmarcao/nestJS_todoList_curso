import { Body, Controller, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoEntity } from "./entities/todo.entity";
import { CreateTodoItem } from "./dtos/create-todo-item.dto";

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post('create')
    async create(@Body() body: CreateTodoItem): Promise<TodoEntity>{
        return await this.todoService.createNewTodoItem(body.text, body.dificult)
    }

}