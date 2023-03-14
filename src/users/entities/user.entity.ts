import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: false})
    name: string

    @Column({ nullable: false})
    login: string

    @Column({ nullable: false})
    password: string
}