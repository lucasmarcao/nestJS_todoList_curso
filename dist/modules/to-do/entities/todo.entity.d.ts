import { BaseEntity } from "typeorm";
export declare class TodoEntity extends BaseEntity {
    id: string;
    text: string;
    complete: boolean;
    dificult: number;
    createdAT: Date | null;
    updatedAT: Date | null;
    deletedAT: Date | null;
}
