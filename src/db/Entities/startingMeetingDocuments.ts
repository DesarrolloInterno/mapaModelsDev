import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class startingMeetingDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idStartingMeeting!: number
    @Column()
    nameDocument!: string
    @Column()
    status!: string
    
}