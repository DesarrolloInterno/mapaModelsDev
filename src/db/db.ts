import "reflect-metadata"
import { DataSource} from "typeorm"
import {users} from "./Entities/users"
import {screens} from "./Entities/screens"
import {permissions_users} from "./Entities/permissions_users"
import {user_historial} from "./Entities/user_historial"
import {staff} from "./Entities/staff"
import {candidates} from "./Entities/candidates"
import {typeDocumentsEmployees} from "./Entities/typeDocumentsEmployees"
import {employeesDocuments} from "./Entities/employeesDocuments"
import {laborTrajectory} from "./Entities/laborTrajectory"
import {interview} from "./Entities/interview"
import {testDrive} from "./Entities/testDrive"
import {antidoping} from "./Entities/antidoping"
import {psychologicalTest} from "./Entities/psychologicalTest"
import {jobReferences} from "./Entities/jobReferences"
import {jobTitle} from "./Entities/jobTitle"
import {employees} from "./Entities/employees"
import {country} from "./Entities/country"
import {state} from "./Entities/state"
import {township} from "./Entities/township"
import {typeBlood} from "./Entities/typeBlood"
import {workerReferences} from "./Entities/workerReferences"
import {driverLicenses} from "./Entities/driverLicenses"
import {typeLicense} from "./Entities/typeLicense"
import {medicalValidity} from "./Entities/medicalValidity"
import {employeeReference} from "./Entities/employeeReference"
import {typeReceipt} from "./Entities/typeReceipt"
import {employeeEmergencyContact} from "./Entities/employeeEmergencyContact"
import {enterprise} from "./Entities/enterprise"
import {fiscalSystem} from "./Entities/fiscalSystem"
import {clientQuote} from "./Entities/clientQuote"
import {clientQuoteTermsAndConditions} from "./Entities/clientQuoteTermsAndConditions"
import {potentialClient} from "./Entities/potentialClient"
import {typeDocumentsClients} from "./Entities/typeDocumentsClients"
import {paymentMethod} from "./Entities/paymentMethod"
import {useOfCFDI} from "./Entities/useOfCFDI"
import {paymentType} from "./Entities/paymentType"
import {clientDocuments} from "./Entities/clientDocuments"
import {startingMeeting} from "./Entities/startingMeeting"
import {client} from "./Entities/client"
import {boardMembersMeeting} from "./Entities/boardMembersMeeting"
import {startingMeetingDocuments} from "./Entities/startingMeetingDocuments"
import {department} from "./Entities/department"
import {clientLocations} from "./Entities/clientLocations"
import {tollBooths} from "./Entities/tollBooths"
import {tollRates} from "./Entities/tollRates"
import {boothRoutes} from "./Entities/boothRoutes"
import {boothRoutes_tollBooths} from "./Entities/boothRoutesTollBooths"
import { c_ClaveProdServCP } from "./Entities/c_ClaveProdServCP"
import { c_ClaveUnidad } from "./Entities/c_ClaveUnidad"
import { c_MaterialPeligroso } from "./Entities/c_MaterialPeligroso"
import { c_TipoEmbalaje } from "./Entities/c_TipoEmbalaje"
import {invoicingConcept} from "./Entities/invoicingConcept"
import {tripType} from "./Entities/tripType"
import {taxes} from "./Entities/taxes"
import {salesFormat} from "./Entities/salesFormat"
import {c_ClaveUnidadInvoicing} from "./Entities/c_ClaveUnidadInvoicing"
import {tripOrder} from "./Entities/tripOrder"
import {dispatchDocuments} from "./Entities/dispatchDocuments"
import {rfcVerification} from "./Entities/rfcVerification"
import {tripOrderProducts} from "./Entities/tripOrderProducts"
import {tripOrderTravelPickups} from "./Entities/tripOrderTravelPickups"
import {c_DocumentoAduanero} from "./Entities/c_DocumentoAduanero"
import {c_TipoMateria} from "./Entities/c_TipoMateria"
import {c_SectorCOFEPRIS} from "./Entities/c_SectorCOFEPRIS"
import {c_FormaFarmaceutica} from "./Entities/c_FormaFarmaceutica"
import {c_CondicionesEspeciales} from "./Entities/c_CondicionesEspeciales"
import {c_RegimenAduanero} from "./Entities/c_RegimenAduanero"
import {clientUsers} from "./Entities/clientUsers"
import { unit } from "./Entities/unit"
import { unitDocuments } from "./Entities/unitDocuments"
import { insurer } from "./Entities/insurer"
import { unitStatus } from "./Entities/unitStatus"
import { unitType } from "./Entities/unitType"
import { operativeClasification } from "./Entities/operativeClasification"
import { c_ConfigAutotransporte } from "./Entities/c_ConfigAutotransporte"
import { c_TipoPermiso } from "./Entities/c_TipoPermiso"
import {accountingAccounts} from "./Entities/accountingAccounts"
import {special_permissions} from "./Entities/special_permissions"
import {c_AgrupadorCuentas} from "./Entities/c_AgrupadorCuentas"
import {lines} from "./Entities/lines"
import { truckBoxes } from "./Entities/truckBoxes"
import { truckBoxLocation } from "./Entities/truckBoxLocation"
import { truckBoxStatus } from "./Entities/truckBoxStatus"
import { truckBoxType } from "./Entities/truckBoxType"
import { c_SubTipoRem } from "./Entities/c_SubTipoRem"
import { truckBoxDocuments } from "./Entities/truckBoxDocuments"
import { tripAdvance } from "./Entities/tripAdvance"
import { owners } from "./Entities/owners"
import { warehouses } from "./Entities/warehouses"
import { truckBoxInventory } from "./Entities/truckBoxInventory"
import { clientTravelOrder } from "./Entities/clientTravelOrder"
import { clientTravelOrderSafetyEquipment } from "./Entities/clientTravelOrderSafetyEquipment"
import { clientTravelOrderDocuments } from "./Entities/clientTravelOrderDocuments"
import {trip} from "./Entities/trip"
import {tripDispatchDocuments} from "./Entities/tripDispatchDocuments"
import {tripProducts} from "./Entities/tripProducts"
import {tripTravelPickups} from "./Entities/tripTravelPickups"
import {invoices} from "./Entities/invoices"
import { clientTravelOrderProducts } from "./Entities/clientTravelOrderProducts"
import { clientTravelOrderTravelPickups } from "./Entities/clientTravelOrderTravelPickups"
import { tracking } from "./Entities/tracking"
import {exchangeRateRecords} from "./Entities/exchangeRateRecords"
import { bankAccounts } from "./Entities/bankAccounts"
import { banks } from "./Entities/banks"
import { payrollExpenseConcepts } from "./Entities/payrollExpenseConcepts"
import { supplementaryPayrollConcepts } from "./Entities/supplementaryPayrollConcepts"
import { positions } from "./Entities/positions"
import { respaldoClientes } from "./Entities/respaldoClientes"
import {bankDeposits} from "./Entities/bankDeposits"
import { respaldoFormatosVenta } from "./Entities/respaldoFormatosVenta"

export const  dbConection = async () =>{
  let PORT: string = process.env.DATABASE_PORT!
  // timeout increase
  const  myDataSource =  new DataSource({ 
    type: "mssql",
    host: process.env.DATABASE_HOST,
    port: parseInt(PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,//no usar en produccion
    logging: true,
    entities: [
      users,
      screens,
      permissions_users,
      user_historial,
      staff,
      candidates,
      typeDocumentsEmployees,
      employeesDocuments,
      laborTrajectory,
      interview,
      testDrive,
      antidoping,
      psychologicalTest,
      jobReferences,
      jobTitle,
      employees,
      country,
      state,
      township,
      typeBlood,
      workerReferences,
      driverLicenses,
      typeLicense,
      medicalValidity,
      employeeReference,
      typeReceipt,
      employeeEmergencyContact,
      enterprise,
      fiscalSystem,
      clientQuote,
      clientQuoteTermsAndConditions,
      potentialClient,
      typeDocumentsClients,
      paymentMethod,
      useOfCFDI,
      paymentType,
      clientDocuments,
      startingMeeting,
      client,
      boardMembersMeeting,
      startingMeetingDocuments,
      department,
      clientLocations,
      tollBooths,
      tollRates,
      boothRoutes,
      boothRoutes_tollBooths,
      c_ClaveProdServCP,
      c_ClaveUnidad,
      c_MaterialPeligroso,
      c_TipoEmbalaje,
      invoicingConcept,
      tripType,
      taxes,
      salesFormat,
      c_ClaveUnidadInvoicing,
      tripOrder,
      dispatchDocuments,
      rfcVerification,
      tripOrderProducts,
      tripOrderTravelPickups,
      c_DocumentoAduanero,
      c_TipoMateria,
      c_SectorCOFEPRIS,
      c_FormaFarmaceutica,
      c_CondicionesEspeciales,
      c_RegimenAduanero,
      clientUsers,
      unit,
      unitDocuments,
      insurer,
      unitStatus,
      unitType,
      operativeClasification,
      c_ConfigAutotransporte,
      c_TipoPermiso,
      accountingAccounts,
      special_permissions,
      c_AgrupadorCuentas,
      lines,
      truckBoxes,
      truckBoxLocation,
      truckBoxStatus,
      truckBoxType,
      c_SubTipoRem,
      truckBoxDocuments,
      tripAdvance,
      owners,
      warehouses,
      truckBoxInventory,
      clientTravelOrder,
      clientTravelOrderSafetyEquipment,
      clientTravelOrderDocuments,
      trip,
      tripDispatchDocuments,
      tripProducts,
      tripTravelPickups,
      invoices,
      clientTravelOrderProducts,
      clientTravelOrderTravelPickups,
      tracking,
      exchangeRateRecords,
      bankAccounts,
      banks,
      payrollExpenseConcepts,
      supplementaryPayrollConcepts,
      positions,
      respaldoClientes,
      bankDeposits,
      respaldoFormatosVenta
    ],
    options: {
      encrypt: true,//true para Windows Azure
    },
    extra: {
      trustServerCertificate: true,
      connectionTimeout: 60000,
      requestTimeout: 60000,
    },
  })

  await myDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((error: any) => console.log(error))
}