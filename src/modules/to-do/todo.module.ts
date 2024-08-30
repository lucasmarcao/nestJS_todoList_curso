import { Module } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoRepository } from "./repositores/todo.repositores";
import { TodoController } from "./todo.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "./entities/todo.entity";


@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    controllers: [TodoController],
    providers: [TodoService, TodoRepository]
})
export class TodoModule{}