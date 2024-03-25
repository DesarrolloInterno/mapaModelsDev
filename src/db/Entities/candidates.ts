import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class candidates extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    contact!: string
    @Column()
    firstName!: string
    @Column()
    paternalLastName!: string
    @Column()
    maternalLastName!: string
    @Column()
    driverLicenseIsActive!: string
    @Column()
    APTOIsActive!: string
    @Column()
    currentlyLabaorando!: string
    @Column()
    age!: number
    @Column()
    experience!: string
    @Column()
    locatedAt!: string
    @Column()
    phone!: string
    @Column()
    comments!: string
    @Column()
    dateCandidateAdded!: string
    @Column()
    dateReject!: string
    @Column()
    userReject!: string
    @Column()
    candidateType!: string

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