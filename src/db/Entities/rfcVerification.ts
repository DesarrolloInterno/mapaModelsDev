import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class rfcVerification extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idCandidates!: number
    @Column()
    comments!: string
    @Column()
    docLink!: string
    @Column()
    status!: number
    @Column()
    userRecorded!: number
    @Column()
    dateRecorded!: number
    @Column()
    userModified!: number
    @Column()
    dateModified!: number
    @Column()
    userRemoved!: number
    @Column()
    dateRemoved!: number
    @Column()
    correctlyCompleted!: string

}