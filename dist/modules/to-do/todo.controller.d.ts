import { TodoService } from "./todo.service";
import { TodoEntity } from "./entities/todo.entity";
import { CreateTodoItem } from "./dtos/create-todo-item.dto";
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(body: CreateTodoItem): Promise<TodoEntity>;
}
