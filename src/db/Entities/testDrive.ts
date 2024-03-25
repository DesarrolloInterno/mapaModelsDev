import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class testDrive extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idCandidates!: number
    @Column()
    comments!: string
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