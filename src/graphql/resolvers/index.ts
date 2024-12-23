import { usersMutations,usersQueries } from './users'
import { screensMutations,screensQueries } from './screens'
import { permissions_usersMutations, permissions_usersQueries } from './permissions_users'
import { user_historialMutations, user_historialQueries } from './user_historial'
import { staffMutations,staffQueries } from './staff'
import { candidatesMutations,candidatesQueries } from './candidates'
import { typeDocumentsEmployeesMutations, typeDocumentsEmployeesQueries } from './typeDocumentsEmployees'
import { employeesDocumentsMutations,employeesDocumentsQueries } from './employeesDocuments'
import { laborTrajectoryMutation,laborTrajectoryQuery} from './laborTrajectory'
import { interviewMutation,interviewQuery} from './interview'
import { testDriveMutation, testDriveQuery} from './testDrive'
import { antidopingMutations, antidopingQueries} from './antidoping'
import { psychologicalTestMutations, psychologicalTestQueries} from './psychologicalTest'
import { jobReferencesMutation, jobReferencesQuery} from './jobReferences'
import { jobTitleMutations,jobTitleQuery } from './jobTitle'
import { employeesMutations, employeesQueries } from './employees'
import {countryQueries} from './country'
import {stateQueries} from './state'
import {townshipQueries} from './township'
import {typeBloodQueries} from './typeBlood'
import {workerReferencesQueries} from './workerReferences'
import {driverLicensesMutations} from './driverLicenses'
import {typeLicenseQueries} from './typeLicense'
import {medicalValidityMutations} from './medicalValidity'
import {employeeReferenceMutations,employeeReferenceQueries} from './employeeReference'
import {typeReceiptMutations, typeReceiptQueries} from './typeReceipt'
import {employeeEmergencyContactMutations, employeeEmergencyContactQueries} from './employeeEmergencyContact'
import {enterpriseMutations, enterpriseQueries} from './enterprise'
import {fiscalSystemQueries} from './fiscalSystem'
import {clientQuoteMutations, clientQuoteQueries} from './clientQuote'
import {clientQuoteTermsAndConditionsMutations, clientQuoteTermsAndConditionsQueries} from './clientQuoteTermsAndConditions'
import {potentialClientMutations, potentialClientQueries} from './potentialClient'
import {typeDocumentsClientsQueries, typeDocumentsClientsMutations} from './typeDocumentsClients'
import {paymentMethodQueries} from './paymentMethod'
import {useOfCFDIQueries} from './useOfCFDI'
import {paymentTypeQueries} from './paymentType'
import {clientDocumentsQueries, clientDocumentsMutations} from './clientDocuments'
import {startingMeetingMutations, startingMeetingQueries} from './startingMeeting'
import {clientsMutations, clientQueries} from './client'
import {boardMembersMeetingQueries, boardMembersMeetingMutations} from './boardMembersMeeting'
import {startingMeetingDocumentsQueries, startingMeetingDocumentsMutations} from './startingMeetingDocuments'
import {departmentQueries, departmentMutations} from './department'
import {clientLocationsQueries, clientLocationsMutations} from './clientLocations'
import {tollBoothsQueries, tollBoothsMutations} from './tollBooths'
import {tollRatesQueries, tollRatesMutations} from './tollRates'
import {boothRoutesQueries, boothRoutesMutations} from './boothRoutes'
import {boothRoutesTollBoothsQueries, boothRoutesTollBoothsMutations} from './boothRoutesTollBooths'
import {c_ClaveProdServCPQueries} from './c_ClaveProdServCP'
import {c_ClaveUnidadQueries} from './c_ClaveUnidad'
import {c_MaterialPeligrosoQueries} from './c_MaterialPeligroso'
import {c_TipoEmbalajeQueries} from './c_TipoEmbalaje'
import {invoicingConceptQueries, invoicingConceptMutations} from './invoicingConcept'
import {tripTypeQueries} from './tripType'
import {taxesQueries, taxesMutations} from './taxes'
import {salesFormatQueries, salesFormatMutations} from './salesFormat'
import {c_ClaveUnidadInvoicingQueries} from './c_ClaveUnidadInvoicing'
import {tripOrderQueries, tripOrderMutations} from './tripOrder'
import {dispatchDocumentsQueries, dispatchDocumentsMutations} from './dispatchDocuments'
import {rfcVerificationQuery, rfcVerificationMutation} from './rfcVerification'
import {tripOrderProductsQueries, tripOrderProductsMutations} from './tripOrderProducts'
import {tripOrderTravelPickupsQueries, tripOrderTravelPickupsMutations} from './tripOrderTravelPickups'
import {c_DocumentoAduaneroQueries} from './c_DocumentoAduanero'
import {c_TipoMateriaQueries} from './c_TipoMateria'
import {c_SectorCOFEPRISQueries} from './c_SectorCOFEPRIS'
import {c_FormaFarmaceuticaQueries} from './c_FormaFarmaceutica'
import {c_CondicionesEspecialesQueries} from './c_CondicionesEspeciales'
import {c_RegimenAduaneroQueries} from './c_RegimenAduanero'
import {clientUsersQueries, clientUserMutations} from './clientUsers'
import { insurerQueries, insurerMutations } from './insurer'
import { accountingAccountsQueries, accountingAccountsMutations } from './accountingAccounts'
import { special_permissionsQueries } from './special_permissions'
import {c_AgrupadorCuentasQueries} from './c_AgrupadorCuentas'
import { unitQueries, unitMutations } from './unit'
import { unitStatusQueries } from './unitStatus'
import { unitTypeQueries } from './unitType'
import { operativeClasificationQueries } from './operativeClasification'
import { c_ConfigAutotransporteQueries } from './c_ConfigAutotransporte'
import { c_TipoPermisoQueries } from './c_TipoPermiso'
import { unitDocumentsMutations, unitDocumentsQueries } from './unitDocuments'
import { linesMutations, linesQueries } from './lines'
import { truckBoxesMutations, truckBoxesQueries } from './truckBoxes'
import { truckBoxLocationQueries } from './truckBoxLocation'
import { truckBoxStatusQueries } from './truckBoxStatus'
import { truckBoxTypeQueries } from './truckBoxType'
import { c_SubTipoRemQueries } from './c_SubTipoRem'
import { truckBoxDocumentsMutations, truckBoxDocumentsQueries } from './truckBoxDocuments'
import { tripAdvanceMutations, tripAdvanceQueries } from './tripAdvance'
import { ownersMutations, ownersQueries } from './owners'
import { warehousesMutations, warehousesQueries } from './warehouses'
import { truckBoxInventoryQueries, truckBoxInventoryMutations } from './truckBoxInventory'
import { ClientTravelOrderMutations, clientTravelOrderQueries } from './clientTravelOrder'
import { clientTravelOrderSafetyEquipmentQueries, clientTravelOrderSafetyEquipmentMutations } from './clientTravelOrderSafetyEquipment'
import { clientTravelOrderDocumentsMutations, clientTravelOrderDocumentsQueries } from './clientTravelOrderDocuments'
import {tripQueries, tripMutations} from './trip'
import {travelAssignmentQueries, travelAssignmentMutations} from './travelAssignment'
import {tripDispatchDocumentsQueries, tripDispatchDocumentsMutations} from './tripDispatchDocuments'
import {tripProductsQueries, tripProductsMutations} from './tripProducts'
import {tripTravelPickupsQueries, tripTravelPickupsMutations} from './tripTravelPickups'
import {invoicesQueries, invoicesMutations} from './invoices'
import { clientTravelOrderProductsMutations, clientTravelOrderProductsQueries } from './clientTravelOrderProducts'
import { clientTravelOrderTravelPickupsMutations, clientTravelOrderTravelPickupsQueries } from './clientTravelOrderTravelPickups'
import { trackingMutations, trackingQueries } from './tracking'
import { exchangeRateRecordsQueries, exchangeRateRecordsMutations} from './exchangeRateRecords'
import { bankAccountsMutations, bankAccountsQueries } from './bankAccounts'
import { banksQueries } from './banks'
import payrollExpenseConceptsQueries from './payrollExpenseConcepts/queries'
import payrollExpenseConceptsMutations from './payrollExpenseConcepts/mutations'
import { supplementaryPayrollConceptsMutations, supplementaryPayrollConceptsQueries } from './supplementaryPayrollConcepts'
import { positionsMutations } from './positions'
import { respaldoClientesMutations } from './respaldoClientes'
import { bankDepositsQueries, bankDepositsMutations } from './bankDeposits'
import { respaldoFormatosVentaMutations } from './respaldoFormatosVenta'
import { respaldoCasetasMutations } from './respaldoCasetas'
import { respaldoDocumentosMutations } from './respaldoDocumentos'

const resolvers = {
    Query: {
        ...usersQueries,
        ...screensQueries,
        ...permissions_usersQueries,
        ...user_historialQueries,
        ...staffQueries,
        ...candidatesQueries,
        ...typeDocumentsEmployeesQueries,
        ...employeesDocumentsQueries,
        ...laborTrajectoryQuery,
        ...interviewQuery,
        ...testDriveQuery,
        ...antidopingQueries,
        ...psychologicalTestQueries,
        ...jobReferencesQuery,
        ...jobTitleQuery,
        ...employeesQueries,
        ...countryQueries,
        ...stateQueries,
        ...townshipQueries,
        ...typeBloodQueries,
        ...workerReferencesQueries,
        ...typeLicenseQueries,
        ...employeeReferenceQueries,
        ...typeReceiptQueries,
        ...employeeEmergencyContactQueries,
        ...enterpriseQueries,
        ...fiscalSystemQueries,
        ...clientQuoteQueries,
        ...clientQuoteTermsAndConditionsQueries,
        ...potentialClientQueries,
        ...typeDocumentsClientsQueries,
        ...paymentMethodQueries,
        ...useOfCFDIQueries,
        ...paymentTypeQueries,
        ...clientDocumentsQueries,
        ...startingMeetingQueries,
        ...clientQueries,
        ...boardMembersMeetingQueries,
        ...startingMeetingDocumentsQueries,
        ...departmentQueries,
        ...clientLocationsQueries,
        ...tollBoothsQueries,
        ...tollRatesQueries,
        ...boothRoutesQueries,
        ...boothRoutesTollBoothsQueries,
        ...c_ClaveProdServCPQueries,
        ...c_ClaveUnidadQueries,
        ...c_MaterialPeligrosoQueries,
        ...c_TipoEmbalajeQueries,
        ...invoicingConceptQueries,
        ...tripTypeQueries,
        ...taxesQueries,
        ...salesFormatQueries,
        ...c_ClaveUnidadInvoicingQueries,
        ...tripOrderQueries,
        ...dispatchDocumentsQueries,
        ...rfcVerificationQuery,
        ...tripOrderProductsQueries,
        ...tripOrderTravelPickupsQueries,
        ...c_DocumentoAduaneroQueries,
        ...c_TipoMateriaQueries,
        ...c_SectorCOFEPRISQueries,
        ...c_FormaFarmaceuticaQueries,
        ...c_CondicionesEspecialesQueries,
        ...c_RegimenAduaneroQueries,
        ...insurerQueries,
        ...unitQueries,
        ...unitStatusQueries,
        ...unitTypeQueries,
        ...operativeClasificationQueries,
        ...c_TipoPermisoQueries,
        ...c_ConfigAutotransporteQueries,
        ...unitDocumentsQueries,
        ...clientUsersQueries,
        ...insurerQueries,
        ...accountingAccountsQueries,
        ...special_permissionsQueries,
        ...c_AgrupadorCuentasQueries,
        ...linesQueries,
        ...truckBoxesQueries,
        ...truckBoxLocationQueries,
        ...truckBoxStatusQueries,
        ...truckBoxTypeQueries,
        ...c_SubTipoRemQueries,
        ...truckBoxDocumentsQueries,
        ...tripAdvanceQueries,
        ...ownersQueries,
        ...warehousesQueries,
        ...truckBoxInventoryQueries,
        ...clientTravelOrderQueries,
        ...clientTravelOrderSafetyEquipmentQueries,
        ...clientTravelOrderDocumentsQueries,
        ...tripQueries,
        ...travelAssignmentQueries,
        ...tripDispatchDocumentsQueries,
        ...tripProductsQueries,
        ...tripTravelPickupsQueries,
        ...clientTravelOrderProductsQueries,
        ...clientTravelOrderTravelPickupsQueries,
        ...trackingQueries,
        ...exchangeRateRecordsQueries,
        ...invoicesQueries,
        ...bankAccountsQueries,
        ...banksQueries,
        ...payrollExpenseConceptsQueries,
        ...supplementaryPayrollConceptsQueries,
        ...bankDepositsQueries
    },
    Mutation: {
        ...user_historialMutations,
        ...usersMutations,
        ...screensMutations,
        ...permissions_usersMutations,
        ...staffMutations,
        ...candidatesMutations,
        ...typeDocumentsEmployeesMutations,
        ...employeesDocumentsMutations,
        ...laborTrajectoryMutation,
        ...interviewMutation,
        ...testDriveMutation,
        ...antidopingMutations,
        ...psychologicalTestMutations,
        ...jobReferencesMutation,
        ...jobTitleMutations,
        ...employeesMutations,
        ...driverLicensesMutations,
        ...medicalValidityMutations,
        ...employeeReferenceMutations,
        ...typeReceiptMutations,
        ...employeeEmergencyContactMutations,
        ...enterpriseMutations,
        ...clientQuoteTermsAndConditionsMutations,
        ...clientQuoteMutations,
        ...potentialClientMutations,
        ...typeDocumentsClientsMutations,
        ...clientDocumentsMutations,
        ...startingMeetingMutations,
        ...boardMembersMeetingMutations,
        ...startingMeetingDocumentsMutations,
        ...clientsMutations,
        ...departmentMutations,
        ...clientLocationsMutations,
        ...tollBoothsMutations,
        ...tollRatesMutations,
        ...boothRoutesMutations,
        ...boothRoutesTollBoothsMutations,
        ...invoicingConceptMutations,
        ...taxesMutations,
        ...salesFormatMutations,
        ...tripOrderMutations,
        ...dispatchDocumentsMutations,
        ...rfcVerificationMutation,
        ...tripOrderProductsMutations,
        ...tripOrderTravelPickupsMutations,
        ...insurerMutations,
        ...unitMutations,
        ...unitDocumentsMutations,
        ...clientUserMutations,
        ...insurerMutations,
        ...accountingAccountsMutations,
        ...linesMutations,
        ...truckBoxesMutations,
        ...truckBoxDocumentsMutations,
        ...tripAdvanceMutations,
        ...ownersMutations,
        ...warehousesMutations,
        ...truckBoxInventoryMutations,
        ...ClientTravelOrderMutations,
        ...clientTravelOrderSafetyEquipmentMutations,
        ...clientTravelOrderDocumentsMutations,
        ...travelAssignmentMutations,
        ...tripDispatchDocumentsMutations,
        ...tripProductsMutations,
        ...tripTravelPickupsMutations,
        ...invoicesMutations,
        ...clientTravelOrderProductsMutations,
        ...clientTravelOrderTravelPickupsMutations,
        ...tripMutations,
        ...trackingMutations,
        ...exchangeRateRecordsMutations,
        ...tripMutations,
        ...bankAccountsMutations,
        ...payrollExpenseConceptsMutations,
        ...supplementaryPayrollConceptsMutations,
        ...positionsMutations,
        ...respaldoClientesMutations,
        ...bankDepositsMutations,
        ...respaldoFormatosVentaMutations,
        ...respaldoCasetasMutations,
        ...respaldoDocumentosMutations
    }
}

export default resolvers