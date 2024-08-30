import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";



@Entity()
export class TodoEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string



    @Column()
    text: string
    
    @Column({
        default: false
    })
    complete: boolean

    @Column()
    dificult: number

    @CreateDateColumn()
    createdAT: Date | null
    
    @UpdateDateColumn()
    updatedAT: Date | null

    @DeleteDateColumn()
    deletedAT: Date | null
}