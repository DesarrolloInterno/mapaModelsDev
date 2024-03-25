import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class typeReceipt extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    status!: string
    @Column()
    userRecorded!: string
    @Column()
    dateRecorded!: Date
    @Column()
    userModified!: string
    @Column()
    dateModified!: Date
    @Column()
    userRemoved!: string
    @Column()
    dateRemoved!: Date

}