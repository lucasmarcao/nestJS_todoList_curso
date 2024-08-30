import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TodoModule } from './modules/to-do/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'todo',
      host: 'ep-blue-snowflake-a5rfbjt0.us-east-2.aws.neon.tech',
      username: 'todo_owner',
      port: 5432,
      password: 'EGT0KLJi4Sme',
      ssl: true,
      synchronize: true,
      autoLoadEntities: true,
      uuidExtension: 'pgcrypto',
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  //postgresql://todo_owner:EGT0KLJi4Sme@ep-blue-snowflake-a5rfbjt0.us-east-2.aws.neon.tech/todo?sslmode=require
})
export class AppModule {}
// npm run start:dev

// postgresql://todo_owner:EGT0KLJi4Sme@ep-blue-snowflake-a5rfbjt0.us-east-2.aws.neon.tech/todo?sslmode=require

//  postgresql://todo_owner:EGT0KLJi4Sme@ep-blue-snowflake-a5rfbjt0.us-east-2.aws.neon.tech/todo?sslmode=require
