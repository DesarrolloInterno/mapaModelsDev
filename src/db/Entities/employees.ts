import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class employees extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    firstName!: string
    @Column()
    paternalLastName!: string
    @Column()
    maternalLastName!: string
    @Column()
    mailNotification!: string
    @Column()
    phone!: string
    @Column()
    employee_number!: string
    @Column()
    nomipaq!: string
    @Column()
    nickname!: string
    @Column()
    DateOfBirth!: string
    @Column()
    placeOfBirth!: string
    @Column()
    gender!: string
    @Column()
    civilStatus!: string
    @Column()
    children!: number
    @Column()
    startDate!: string
    @Column()
    idJobTitle!: number
    @Column()
    businessPhone!: string
    @Column()
    address!: string
    @Column()
    outsideAddressNumber!: string
    @Column()
    insideAddressNumber!: string
    @Column()
    neighborhood!: string
    @Column()
    idCountry!: number
    @Column()
    idState!: number
    @Column()
    idTown!: number
    @Column()
    CP!: string
    @Column()
    socialSecurityNumber!: string
    @Column()
    CURP!: string
    @Column()
    RFC!: string
    @Column()
    CPSAT!: string
    @Column()
    bankAccount!: string
    @Column()
    expenseAccount!: string
    @Column()
    netSalary!: number
    @Column()
    grossSalary!: number
    @Column()
    IDS!: number
    @Column()
    allergies!: string
    @Column()
    Disease!: string
    @Column()
    surgeries!: string
    @Column()
    medicalTreatments!: string
    @Column()
    idTypeBlood!: number
}