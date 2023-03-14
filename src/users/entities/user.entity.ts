import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ schema: 'rbac_api', })
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