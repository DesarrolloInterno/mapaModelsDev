import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class screens extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    idTopMenu!: number
    @Column()
    location!: string
    @Column()
    status!: string
    @Column()
    order!: number
    @Column()
    menu!: string

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
