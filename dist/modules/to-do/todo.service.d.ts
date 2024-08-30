import { TodoRepository } from './repositores/todo.repositores';
import { TodoEntity } from './entities/todo.entity';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    createNewTodoItem(text: string, dificult: number): Promise<TodoEntity>;
}
