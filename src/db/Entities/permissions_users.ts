import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class permissions_users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idUser!: number
    @Column()
    idScreen!: number
    @Column()
    edit!: boolean
    @Column()
    show!: boolean
    @Column()
    delete!: boolean
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
