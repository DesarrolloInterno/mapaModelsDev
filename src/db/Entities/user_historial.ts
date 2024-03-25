import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user_historial extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idUser!: number
    @Column()
    event!: string
    @Column()
    access_point!: string
    @Column()
    end_date_password!: Date
    @Column()
    userRecorded!: string
    @Column()
    dateRecorded!: Date
    @Column()
    status!: string
}