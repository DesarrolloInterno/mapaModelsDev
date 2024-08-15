import { tripProducts } from "../../../db/Entities/tripProducts";

const tripProductsMutations = {

    CREATE_TRIP_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idTrip, 
            productName, 
            productNameMessage,
            productCode, 
            productCodeMessage,
            codeUnit, 
            codeUnitMessage,
            cargoQuantity, 
            cargoQuantityMessage,
            cargoWeight, 
            cargoWeightMessage,
            weightUnit, 
            weightUnitMessage,
            hazardousMaterial,
            codeHazardousMaterial,
            codeHazardousMaterialMessage,
            codePackaging,
            codePackagingMessage,
            declarationNumberPart1,
            declarationNumberPart2,
            declarationNumberPart3,
            declarationNumberPart4,
            declarationNumberMessage,
            tariffCode,
            tariffCodeMessage,
            foeringTradeUUID,
            foeringTradeUUIDMessage,
            userLoggedIn, 
            documentTypeCode,
            documentTypeCodeMessage,
            materialTypeCode,
            materialTypeCodeMessage,
            materialDescription,
            materialDescriptionMessage,
            rfcImporter,
            rfcImporterMessage,
            cofeprisSector,
            cofeprisSectorMessage,
            activeIngredientName,
            activeIngredientNameMessage,
            chemicalName,
            chemicalNameMessage,
            genericProductName,
            genericProductNameMessage,
            distinctiveProductName,
            distinctiveProductNameMessage,
            companyNameMaker,
            companyNameMakerMessage,
            expirationDate,
            expirationDateMessage,
            medicationPackage,
            medicationPackageMessage,
            pharmaceuticalForm,
            pharmaceuticalFormMessage,
            specialConditionsTransport,
            specialConditionsTransportMessage,
            healthRegistryAuthorizationFolio,
            healthRegistryAuthorizationFolioMessage,
            importPermitFolio,
            importPermitFolioMessage,
            vucemImportFolio,
            vucemImportFolioMessage,
            chemicalAbstractsServiceNumber,
            chemicalAbstractsServiceNumberMessage,
            importCompanyName,
            importCompanyNameMessage,
            healthRegistrationNumberPesticidesFertilizers,
            healthRegistrationNumberPesticidesFertilizersMessage,
            manufacturerInformation,
            manufacturerInformationMessage,
            formulatorData,
            formulatorDataMessage,
            maquiladoraData,
            maquiladoraDataMessage,
            authorizedUse,
            authorizedUseMessage,
            customsDocumentIdentifier,
            customsDocumentIdentifierMessage,
        } = input;
        try {

            const newid = await tripProducts.query("exec create_tripProducts " +
                "@idTrip = '"+ idTrip +
                "', @productName = '"+ productName + "', @productNameMessage = '"+ productNameMessage +
                "', @productCode = '"+ productCode + "', @productCodeMessage = '"+ productCodeMessage +
                "', @codeUnit = '"+ codeUnit + "', @codeUnitMessage = '"+ codeUnitMessage +
                "', @cargoQuantity = '"+ cargoQuantity + "', @cargoQuantityMessage = '"+ cargoQuantityMessage +
                "', @cargoWeight = '"+ cargoWeight + "', @cargoWeightMessage = '"+ cargoWeightMessage +
                "', @weightUnit = '"+ weightUnit + "', @weightUnitMessage = '"+ weightUnitMessage +
                "', @hazardousMaterial = '"+ hazardousMaterial + 
                "', @codeHazardousMaterial = '"+ codeHazardousMaterial + "', @codeHazardousMaterialMessage = '"+ codeHazardousMaterialMessage +
                "', @codePackaging = '"+ codePackaging + "', @codePackagingMessage = '"+ codePackagingMessage +
                "', @declarationNumberPart1 = '"+ declarationNumberPart1 +
                "', @declarationNumberPart2 = '"+ declarationNumberPart2 +
                "', @declarationNumberPart3 = '"+ declarationNumberPart3 +
                "', @declarationNumberPart4 = '"+ declarationNumberPart4 + "', @declarationNumberMessage = '"+ declarationNumberMessage +
                "', @tariffCode = '"+ tariffCode + "', @tariffCodeMessage = '"+ tariffCodeMessage +
                "', @foeringTradeUUID = '"+ foeringTradeUUID + "', @foeringTradeUUIDMessage = '"+ foeringTradeUUIDMessage +
                "', @userLoggedIn = '"+ userLoggedIn + 
                "', @documentTypeCode = '"+ documentTypeCode + "', @documentTypeCodeMessage = '"+ documentTypeCodeMessage +
                "', @materialTypeCode = '"+ materialTypeCode + "', @materialTypeCodeMessage = '"+ materialTypeCodeMessage +
                "', @materialDescription = '"+ materialDescription + "', @materialDescriptionMessage = '"+ materialDescriptionMessage +
                "', @rfcImporter = '"+ rfcImporter + "', @rfcImporterMessage = '"+ rfcImporterMessage +
                "', @cofeprisSector = '"+ cofeprisSector + "', @cofeprisSectorMessage = '"+ cofeprisSectorMessage +
                "', @activeIngredientName = '"+ activeIngredientName + "', @activeIngredientNameMessage = '"+ activeIngredientNameMessage +
                "', @chemicalName = '"+ chemicalName + "', @chemicalNameMessage = '"+ chemicalNameMessage +
                "', @genericProductName = '"+ genericProductName + "', @genericProductNameMessage = '"+ genericProductNameMessage +
                "', @distinctiveProductName = '"+ distinctiveProductName + "', @distinctiveProductNameMessage = '"+ distinctiveProductNameMessage +
                "', @companyNameMaker = '"+ companyNameMaker + "', @companyNameMakerMessage = '"+ companyNameMakerMessage +
                "', @expirationDate = '"+ expirationDate + "', @expirationDateMessage = '"+ expirationDateMessage +
                "', @medicationPackage = '"+ medicationPackage + "', @medicationPackageMessage = '"+ medicationPackageMessage +
                "', @pharmaceuticalForm = '"+ pharmaceuticalForm + "', @pharmaceuticalFormMessage = '"+ pharmaceuticalFormMessage +
                "', @specialConditionsTransport = '"+ specialConditionsTransport + "', @specialConditionsTransportMessage = '"+ specialConditionsTransportMessage +
                "', @healthRegistryAuthorizationFolio = '"+ healthRegistryAuthorizationFolio + "', @healthRegistryAuthorizationFolioMessage = '"+ healthRegistryAuthorizationFolioMessage +
                "', @importPermitFolio = '"+ importPermitFolio + "', @importPermitFolioMessage = '"+ importPermitFolioMessage +
                "', @vucemImportFolio = '"+ vucemImportFolio + "', @vucemImportFolioMessage = '"+ vucemImportFolioMessage +
                "', @chemicalAbstractsServiceNumber = '"+ chemicalAbstractsServiceNumber + "', @chemicalAbstractsServiceNumberMessage = '"+ chemicalAbstractsServiceNumberMessage +
                "', @importCompanyName = '"+ importCompanyName + "', @importCompanyNameMessage = '"+ importCompanyNameMessage +
                "', @healthRegistrationNumberPesticidesFertilizers = '"+ healthRegistrationNumberPesticidesFertilizers + "', @healthRegistrationNumberPesticidesFertilizersMessage = '"+ healthRegistrationNumberPesticidesFertilizersMessage +
                "', @manufacturerInformation = '"+ manufacturerInformation + "', @manufacturerInformationMessage = '"+ manufacturerInformationMessage +
                "', @formulatorData = '"+ formulatorData + "', @formulatorDataMessage = '"+ formulatorDataMessage +
                "', @maquiladoraData = '"+ maquiladoraData + "', @maquiladoraDataMessage = '"+ maquiladoraDataMessage +
                "', @authorizedUse = '"+ authorizedUse +"', @authorizedUseMessage = '"+ authorizedUseMessage +
                "', @customsDocumentIdentifier = '"+ customsDocumentIdentifier +"', @customsDocumentIdentifierMessage = '"+ customsDocumentIdentifierMessage +"'");
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            idTripTravelPickup,
            idClientLocation,
            idTrip,
            idRowProduct,
            kilometres,
            productQuantity,
            productWeight,
            measuringUnit,
            appointmentDate,
            typeLoad,
            userLoggedIn,
            status
        } = input;
        try {
            await tripProducts.query("exec update_tripTravelPickups " +
                "@idTripTravelPickup = '"+ idTripTravelPickup +"', @idClientLocation = '"+ idClientLocation +"', " +
                "@idTrip = '"+ idTrip +"', @idRowProduct = '"+ idRowProduct +"', " +
                "@kilometres = '"+ kilometres +"', @productQuantity = '"+ productQuantity +"', @productWeight = '"+ productWeight +"', " +
                "@measuringUnit = '"+ measuringUnit +"', @appointmentDate = '"+ appointmentDate +"', " +
                "@typeLoad = '"+ typeLoad +"', @userLoggedIn = '"+ userLoggedIn +"', @status = '"+ status +"' ");

            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idTripProduct,
            idTrip,
            productName,
            productNameMessage,
            productCode,
            productCodeMessage,
            codeUnit,
            codeUnitMessage,
            cargoQuantity,
            cargoQuantityMessage,
            cargoWeight,
            cargoWeightMessage,
            weightUnit,
            weightUnitMessage,
            hazardousMaterial,
            codeHazardousMaterial,
            codeHazardousMaterialMessage,
            codePackaging,
            codePackagingMessage,
            declarationNumberPart1,
            declarationNumberPart2,
            declarationNumberPart3,
            declarationNumberPart4,
            declarationNumberMessage,
            tariffCode,
            tariffCodeMessage,
            foeringTradeUUID,
            foeringTradeUUIDMessage,
            userLoggedIn,
            status,
            documentTypeCode,
            documentTypeCodeMessage,
            materialTypeCode,
            materialTypeCodeMessage,
            materialDescription,
            materialDescriptionMessage,
            rfcImporter,
            rfcImporterMessage,
            cofeprisSector,
            cofeprisSectorMessage,
            activeIngredientName,
            activeIngredientNameMessage,
            chemicalName,
            chemicalNameMessage,
            genericProductName,
            genericProductNameMessage,
            distinctiveProductName,
            distinctiveProductNameMessage,
            companyNameMaker,
            companyNameMakerMessage,
            expirationDate,
            expirationDateMessage,
            medicationPackage,
            medicationPackageMessage,
            pharmaceuticalForm,
            pharmaceuticalFormMessage,
            specialConditionsTransport,
            specialConditionsTransportMessage,
            healthRegistryAuthorizationFolio,
            healthRegistryAuthorizationFolioMessage,
            importPermitFolio,
            importPermitFolioMessage,
            vucemImportFolio,
            vucemImportFolioMessage,
            chemicalAbstractsServiceNumber,
            chemicalAbstractsServiceNumberMessage,
            importCompanyName,
            importCompanyNameMessage,
            healthRegistrationNumberPesticidesFertilizers,
            healthRegistrationNumberPesticidesFertilizersMessage,
            manufacturerInformation,
            manufacturerInformationMessage,
            formulatorData,
            formulatorDataMessage,
            maquiladoraData,
            maquiladoraDataMessage,
            authorizedUse,
            authorizedUseMessage,
            customsDocumentIdentifier,
            customsDocumentIdentifierMessage,
        } = input;
        try {
            const newid = await tripProducts.query("exec update_tripProducts " +
                "@idTripProduct = '"+ idTripProduct + 
                "', @idTrip = '"+ idTrip +
                "', @productName = '"+ productName + "', @productNameMessage = '"+ productNameMessage +
                "', @productCode = '"+ productCode + "', @productCodeMessage = '"+ productCodeMessage +
                "', @codeUnit = '"+ codeUnit + "', @codeUnitMessage = '"+ codeUnitMessage +
                "', @cargoQuantity = '"+ cargoQuantity + "', @cargoQuantityMessage = '"+ cargoQuantityMessage +
                "', @cargoWeight = '"+ cargoWeight + "', @cargoWeightMessage = '"+ cargoWeightMessage +
                "', @weightUnit = '"+ weightUnit + "', @weightUnitMessage = '"+ weightUnitMessage +
                "', @hazardousMaterial = '"+ hazardousMaterial + 
                "', @codeHazardousMaterial = '"+ codeHazardousMaterial + "', @codeHazardousMaterialMessage = '"+ codeHazardousMaterialMessage +
                "', @codePackaging = '"+ codePackaging + "', @codePackagingMessage = '"+ codePackagingMessage +
                "', @declarationNumberPart1 = '"+ declarationNumberPart1 +
                "', @declarationNumberPart2 = '"+ declarationNumberPart2 + 
                "', @declarationNumberPart3 = '"+ declarationNumberPart3 +
                "', @declarationNumberPart4 = '"+ declarationNumberPart4 + "', @declarationNumberMessage = '"+ declarationNumberMessage +
                "', @tariffCode = '"+ tariffCode + "', @tariffCodeMessage = '"+ tariffCodeMessage +
                "', @foeringTradeUUID = '"+ foeringTradeUUID + "', @foeringTradeUUIDMessage = '"+ foeringTradeUUIDMessage +
                "', @userLoggedIn = '"+ userLoggedIn + 
                "', @status ='"+ status +
                "', @documentTypeCode = '"+ documentTypeCode + "', @documentTypeCodeMessage = '"+ documentTypeCodeMessage +
                "', @materialTypeCode = '"+ materialTypeCode + "', @materialTypeCodeMessage = '"+ materialTypeCodeMessage +
                "', @materialDescription = '"+ materialDescription + "', @materialDescriptionMessage = '"+ materialDescriptionMessage +
                "', @rfcImporter = '"+ rfcImporter + "', @rfcImporterMessage = '"+ rfcImporterMessage +
                "', @cofeprisSector = '"+ cofeprisSector + "', @cofeprisSectorMessage = '"+ cofeprisSectorMessage +
                "', @activeIngredientName = '"+ activeIngredientName + "', @activeIngredientNameMessage = '"+ activeIngredientNameMessage +
                "', @chemicalName = '"+ chemicalName + "', @chemicalNameMessage = '"+ chemicalNameMessage +
                "', @genericProductName = '"+ genericProductName + "', @genericProductNameMessage = '"+ genericProductNameMessage +
                "', @distinctiveProductName = '"+ distinctiveProductName + "', @distinctiveProductNameMessage = '"+ distinctiveProductNameMessage +
                "', @companyNameMaker = '"+ companyNameMaker + "', @companyNameMakerMessage = '"+ companyNameMakerMessage +
                "', @expirationDate = '"+ expirationDate + "', @expirationDateMessage = '"+ expirationDateMessage +
                "', @medicationPackage = '"+ medicationPackage + "', @medicationPackageMessage = '"+ medicationPackageMessage +
                "', @pharmaceuticalForm = '"+ pharmaceuticalForm + "', @pharmaceuticalFormMessage = '"+ pharmaceuticalFormMessage +
                "', @specialConditionsTransport = '"+ specialConditionsTransport + "', @specialConditionsTransportMessage = '"+ specialConditionsTransportMessage +
                "', @healthRegistryAuthorizationFolio = '"+ healthRegistryAuthorizationFolio + "', @healthRegistryAuthorizationFolioMessage = '"+ healthRegistryAuthorizationFolioMessage +
                "', @importPermitFolio = '"+ importPermitFolio + "', @importPermitFolioMessage = '"+ importPermitFolioMessage +
                "', @vucemImportFolio = '"+ vucemImportFolio + "', @vucemImportFolioMessage = '"+ vucemImportFolioMessage +
                "', @chemicalAbstractsServiceNumber = '"+ chemicalAbstractsServiceNumber + "', @chemicalAbstractsServiceNumberMessage = '"+ chemicalAbstractsServiceNumberMessage +
                "', @importCompanyName = '"+ importCompanyName + "', @importCompanyNameMessage = '"+ importCompanyNameMessage +
                "', @healthRegistrationNumberPesticidesFertilizers = '"+ healthRegistrationNumberPesticidesFertilizers + "', @healthRegistrationNumberPesticidesFertilizersMessage = '"+ healthRegistrationNumberPesticidesFertilizersMessage +
                "', @manufacturerInformation = '"+ manufacturerInformation + "', @manufacturerInformationMessage = '"+ manufacturerInformationMessage +
                "', @formulatorData = '"+ formulatorData + "', @formulatorDataMessage = '"+ formulatorDataMessage +
                "', @maquiladoraData = '"+ maquiladoraData + "', @maquiladoraDataMessage = '"+ maquiladoraDataMessage +
                "', @authorizedUse = '"+ authorizedUse +"', @authorizedUseMessage = '"+ authorizedUseMessage +
                "', @customsDocumentIdentifier = '"+ customsDocumentIdentifier +"', @customsDocumentIdentifierMessage = '"+ customsDocumentIdentifierMessage +"'");

            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_ALL_TRIP_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idTrip,
            userLoggedIn, 
        } = input;
        try {
            await tripProducts.query("exec delete_all_products_trip @idTrip = '"+ idTrip +"', @userLoggedIn = '"+ userLoggedIn +"' ");

            return 'Registros eliminados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP_PRODUCTS_EXCEL: async (_: any, {input}: any) => {
        const { 
            idTrip,
            productName,
            productNameMessage,
            productCode,
            productCodeMessage,
            codeUnit,
            codeUnitMessage,
            cargoQuantity,
            cargoQuantityMessage,
            cargoWeight,
            cargoWeightMessage,
            weightUnit,
            hazardousMaterial,
            codeHazardousMaterial,
            codeHazardousMaterialMessage,
            codePackaging,
            codePackagingMessage,
            declarationNumber,
            declarationNumberMessage,
            tariffCode,
            tariffCodeMessage,
            foeringTradeUUID,
            foeringTradeUUIDMessage,
            userLoggedIn,
            documentTypeCode,
            documentTypeCodeMessage,
            materialTypeCode,
            materialTypeCodeMessage,
            materialDescription,
            materialDescriptionMessage,
            rfcImporter,
            rfcImporterMessage,
            cofeprisSector,
            cofeprisSectorMessage,
            activeIngredientName,
            activeIngredientNameMessage,
            chemicalName,
            chemicalNameMessage,
            genericProductName,
            genericProductNameMessage,
            distinctiveProductName,
            distinctiveProductNameMessage,
            companyNameMaker,
            companyNameMakerMessage,
            expirationDate,
            expirationDateMessage,
            medicationPackage,
            medicationPackageMessage,
            pharmaceuticalForm,
            pharmaceuticalFormMessage,
            specialConditionsTransport,
            specialConditionsTransportMessage,
            healthRegistryAuthorizationFolio,
            healthRegistryAuthorizationFolioMessage,
            importPermitFolio,
            importPermitFolioMessage,
            vucemImportFolio,
            vucemImportFolioMessage,
            chemicalAbstractsServiceNumber,
            chemicalAbstractsServiceNumberMessage,
            importCompanyName,
            importCompanyNameMessage,
            healthRegistrationNumberPesticidesFertilizers,
            healthRegistrationNumberPesticidesFertilizersMessage,
            manufacturerInformation,
            manufacturerInformationMessage,
            formulatorData,
            formulatorDataMessage,
            maquiladoraData,
            maquiladoraDataMessage,
            authorizedUse,
            authorizedUseMessage,
            excelRow,
            customsClearance,
            customsClearanceMessage,
            customsDocumentIdentifier,
            customsDocumentIdentifierMessage
        } = input;
        try {
            const newid = await tripProducts.query("exec create_tripProducts_excel " +
            "@idTrip = '"+ idTrip +"', @productName = '"+ productName +"', @productNameMessage = '"+ productNameMessage +"', " +
            "@productCode = '"+ productCode +"', @productCodeMessage = '"+ productCodeMessage +"', @codeUnit = '"+ codeUnit +"', " +
            "@codeUnitMessage = '"+ codeUnitMessage +"', @cargoQuantity = '"+ cargoQuantity +"', @cargoQuantityMessage = '"+ cargoQuantityMessage +"', " +
            "@cargoWeight = '"+ cargoWeight +"', @cargoWeightMessage = '"+ cargoWeightMessage +"', @weightUnit = '"+ weightUnit +"', " +
            "@hazardousMaterial = '"+ hazardousMaterial +"', @codeHazardousMaterial = '"+ codeHazardousMaterial +"', " +
            "@codeHazardousMaterialMessage = '"+ codeHazardousMaterialMessage +"', @codePackaging = '"+ codePackaging +"', " +
            "@codePackagingMessage = '"+ codePackagingMessage +"', @declarationNumber = '"+ declarationNumber +"', " +
            "@declarationNumberMessage = '"+ declarationNumberMessage +"', @tariffCode = '"+ tariffCode +"', " +
            "@tariffCodeMessage = '"+ tariffCodeMessage +"', @foeringTradeUUID = '"+ foeringTradeUUID +"', " +
            "@foeringTradeUUIDMessage = '"+ foeringTradeUUIDMessage +"', @userLoggedIn = '"+ userLoggedIn +"', " +
            "@documentTypeCode = '"+ documentTypeCode +"', @documentTypeCodeMessage = '"+ documentTypeCodeMessage +"', " +
            "@materialTypeCode = '"+ materialTypeCode +"', @materialTypeCodeMessage = '"+ materialTypeCodeMessage +"', " +
            "@materialDescription = '"+ materialDescription +"', @materialDescriptionMessage = '"+ materialDescriptionMessage +"', " +
            "@rfcImporter = '"+ rfcImporter +"', @rfcImporterMessage = '"+ rfcImporterMessage +"', " +
            "@cofeprisSector = '"+ cofeprisSector +"', @cofeprisSectorMessage = '"+ cofeprisSectorMessage +"', " +
            "@activeIngredientName = '"+ activeIngredientName +"', @activeIngredientNameMessage = '"+ activeIngredientNameMessage +"', " +
            "@chemicalName = '"+ chemicalName +"', @chemicalNameMessage = '"+ chemicalNameMessage +"', " +
            "@genericProductName = '"+ genericProductName +"', @genericProductNameMessage = '"+ genericProductNameMessage +"', " +
            "@distinctiveProductName = '"+ distinctiveProductName +"', @distinctiveProductNameMessage = '"+ distinctiveProductNameMessage +"', " +
            "@companyNameMaker = '"+ companyNameMaker +"', @companyNameMakerMessage = '"+ companyNameMakerMessage +"', " +
            "@expirationDate = '"+ expirationDate +"', @expirationDateMessage = '"+ expirationDateMessage +"', " +
            "@medicationPackage = '"+ medicationPackage +"', @medicationPackageMessage = '"+ medicationPackageMessage +"', " +
            "@pharmaceuticalForm = '"+ pharmaceuticalForm +"', @pharmaceuticalFormMessage = '"+ pharmaceuticalFormMessage +"', " +
            "@specialConditionsTransport = '"+ specialConditionsTransport +"', @specialConditionsTransportMessage = '"+ specialConditionsTransportMessage +"', " +
            "@healthRegistryAuthorizationFolio = '"+ healthRegistryAuthorizationFolio +"', @healthRegistryAuthorizationFolioMessage = '"+ healthRegistryAuthorizationFolioMessage +"', " +
            "@importPermitFolio = '"+ importPermitFolio +"', @importPermitFolioMessage = '"+ importPermitFolioMessage +"', " +
            "@vucemImportFolio = '"+ vucemImportFolio +"', @vucemImportFolioMessage = '"+ vucemImportFolioMessage +"', " +
            "@chemicalAbstractsServiceNumber = '"+ chemicalAbstractsServiceNumber +"', @chemicalAbstractsServiceNumberMessage = '"+ chemicalAbstractsServiceNumberMessage +"', " +
            "@importCompanyName = '"+ importCompanyName +"', @importCompanyNameMessage = '"+ importCompanyNameMessage +"', " +
            "@healthRegistrationNumberPesticidesFertilizers = '"+ healthRegistrationNumberPesticidesFertilizers +"', " +
            "@healthRegistrationNumberPesticidesFertilizersMessage = '"+ healthRegistrationNumberPesticidesFertilizersMessage +"', " +
            "@manufacturerInformation = '"+ manufacturerInformation +"', @manufacturerInformationMessage = '"+ manufacturerInformationMessage +"', " +
            "@formulatorData = '"+ formulatorData +"', @formulatorDataMessage = '"+ formulatorDataMessage +"', " +
            "@maquiladoraData = '"+ maquiladoraData +"', @maquiladoraDataMessage = '"+ maquiladoraDataMessage +"', " +
            "@authorizedUse = '"+ authorizedUse +"', @authorizedUseMessage = '"+ authorizedUseMessage +"', " +
            "@excelRow = '"+ excelRow +"', @customsClearance = '"+ customsClearance +"', " +
            "@customsClearanceMessage = '"+ customsClearanceMessage +"', " +
            "@customsDocumentIdentifier = '"+ customsDocumentIdentifier +"', @customsDocumentIdentifierMessage = '"+ customsDocumentIdentifierMessage +"'");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
};

export default tripProductsMutations;