import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class employeeReference extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idEmployee!: number
    @Column()
    name!: string
    @Column()
    address!: string
    @Column()
    phone!: string
    @Column()
    relationship!: string
    @Column()
    mail!: string
    @Column()
    docLink!: string

    @Column()
    status!: string
    @Column()
    userRecorded!: string
    @Column()
    dateRecorded!: string
    @Column()
    userModified!: string
    @Column()
    dateModified!: string
    @Column()
    userRemoved!: string
    @Column()
    dateRemoved!: string
    
}