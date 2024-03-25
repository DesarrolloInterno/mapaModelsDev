import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class staff extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idUser!: number
    @Column()
    staffPosition!: string
    @Column()
    staffName!: string
    @Column()
    staffPhone!: string
    @Column()
    staffEmail!: string
    @Column()
    status!: string
    @Column()
    daysValidityPassword!: number
    @Column()
    alertValidityPassword!: number
    
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