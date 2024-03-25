import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class startingMeeting extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClient!: number
    @Column()
    dateMeeting!: string
    @Column()
    name!: string
    @Column()
    location!: string
    @Column()
    status!: string
}