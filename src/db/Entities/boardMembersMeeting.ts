import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class boardMembersMeeting extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idStartingMeeting!: number
    @Column()
    name!: string
    @Column()
    mail!: string
    @Column()
    status!: string
    
}