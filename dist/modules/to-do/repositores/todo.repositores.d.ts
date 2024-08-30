import { Repository } from 'typeorm';
import { TodoEntity } from '../entities/todo.entity';
export declare class TodoRepository extends Repository<TodoEntity> {
    constructor(repository: Repository<TodoEntity>);
    getOneById(id: string): Promise<TodoEntity>;
    list(params: {
        page: number;
        perPage: number;
        createdAt?: Date;
        dificult?: number;
        search?: string;
        completed?: boolean;
    }): Promise<Array<TodoEntity>>;
    registerItem(input: Partial<TodoEntity>): Promise<TodoEntity>;
}
