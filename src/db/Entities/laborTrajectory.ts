import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class laborTrajectory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idCandidates!: number
    @Column()
    laborTrajectory!: string
    @Column()
    comments!: string
    @Column()
    status!: number
    @Column()
    correctlyCompleted!: string
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

}