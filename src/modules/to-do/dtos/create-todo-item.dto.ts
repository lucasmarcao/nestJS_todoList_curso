import { IsInt, Length } from 'class-validator';

export class CreateTodoItem {
  @Length(1, 256)
  text: string;

  @IsInt()
  dificult: number;
}
