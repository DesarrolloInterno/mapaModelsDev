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
      clientUsers
    ],
    options: {
      encrypt: true,//true para Windows Azure
    },
    extra: {
      trustServerCertificate: true,
      connectionTimeoutMillis: 30000,
      requestTimeoutMillis: 30000,
    },
  })

  await myDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((error: any) => console.log(error))
}