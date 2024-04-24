import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class special_permissions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idUser!: number
    @Column()
    permissionName!: string
    @Column()
    isAuthorized!: boolean
    @Column()
    status!: string

}