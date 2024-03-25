import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class users extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  user!: string
  @Column()
  email!: string
  @Column()
  name!: string
  @Column()
  idEmployee!: number
  @Column()
  status!: string
  @Column()
  end_date_password!: string
  @Column()
  firstAccess!: boolean

  @Column()
  userRecorded!: string
  @Column()
  dateRecorded!: Date
  @Column()
  userModified!: string
  @Column()
  dateModified!: Date
  @Column()
  userRemoved!: string
  @Column()
  dateRemoved!: Date
}