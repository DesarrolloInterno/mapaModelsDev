import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class potentialClient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClient!: number
    @Column()
    name!: string
    @Column()
    mail!: string
    @Column()
    phone!: string
    @Column()
    trackingEmail!: string
    @Column()
    user!: string
    @Column()
    status!: string
}
