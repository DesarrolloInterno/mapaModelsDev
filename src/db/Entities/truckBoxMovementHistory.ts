import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxMovementHistory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    idWarehouse! : string
	@Column()
    warehouse! : string
	@Column()
    numTruckBoxMovement! : string
	@Column()
    idTruckBox! : string
	@Column()
    truckBox! : string
	@Column()
    issueDate! : string
	@Column()
    idClient! : string
	@Column()
    client! : string
	@Column()
    idLine! : string
	@Column()
    line! : string
	@Column()
    positioner! : string
	@Column()
    observations! : string
	@Column()
    truckBoxStatus! : string
	@Column()
    status! : string
	@Column()
    movementType! : string
}