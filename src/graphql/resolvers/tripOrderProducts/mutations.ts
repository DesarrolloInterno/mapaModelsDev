import { tripOrderProducts } from "../../../db/Entities/tripOrderProducts";

const tripOrderProductsMutations = {

    CREATE_TRIP_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idTripOrder, 
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
            console.log('idTripOrder', idTripOrder)
            const newid = await tripOrderProducts.query("exec create_tripOrderProducts " +
                "@idTripOrder = '"+ idTripOrder +
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
    CREATE_TRIP_ORDER_PRODUCTS_EXCEL: async (_: any, {input}: any) => {
        const { 
            idTripOrder, 
            productName, 
            productCode, 
            codeUnit, 
            cargoQuantity, 
            cargoQuantityMessage,
            cargoWeight, 
            cargoWeightMessage,
            weightUnit, 
            hazardousMaterial,
            codeHazardousMaterial,
            codePackaging,
            declarationNumber,
            declarationNumberMessage,
            tariffCode,
            foeringTradeUUID,
            userLoggedIn, 
            documentTypeCode,
            materialTypeCode,
            materialDescription,
            rfcImporter,
            cofeprisSector,
            activeIngredientName,
            chemicalName,
            genericProductName,
            distinctiveProductName,
            companyNameMaker,
            expirationDate,
            expirationDateMessage,
            medicationPackage,
            pharmaceuticalForm,
            specialConditionsTransport,
            healthRegistryAuthorizationFolio,
            importPermitFolio,
            vucemImportFolio,
            chemicalAbstractsServiceNumber,
            importCompanyName,
            healthRegistrationNumberPesticidesFertilizers,
            manufacturerInformation,
            formulatorData,
            maquiladoraData,
            authorizedUse,
            excelRow,
            customsClearance
        } = input;
        try {
            const newid = await tripOrderProducts.query("exec create_tripOrderProducts_excel " +
            "@idTripOrder = '"+ idTripOrder +"', @productName = '"+ productName +"', @productCode = '"+ productCode +"', @codeUnit = '"+ codeUnit +"', " +
            "@cargoQuantity = '"+ cargoQuantity +"', @cargoQuantityMessage = '"+ cargoQuantityMessage +"', @cargoWeight = '"+ cargoWeight +"', @cargoWeightMessage = '"+ cargoWeightMessage +"', " +
            "@weightUnit = '"+ weightUnit +"', @hazardousMaterial = '"+ hazardousMaterial +"', @codeHazardousMaterial = '"+ codeHazardousMaterial +"', " +
            "@codePackaging = '"+ codePackaging +"', @declarationNumber = '"+ declarationNumber +"', @declarationNumberMessage = '"+ declarationNumberMessage +"', " +
            "@tariffCode = '"+ tariffCode +"', @foeringTradeUUID = '"+ foeringTradeUUID +"', @userLoggedIn = '"+ userLoggedIn +"', " +
            "@documentTypeCode = '"+ documentTypeCode +"', @materialTypeCode = '"+ materialTypeCode +"', " +
            "@materialDescription = '"+ materialDescription +"', @rfcImporter = '"+ rfcImporter +"', " +
            "@cofeprisSector = '"+ cofeprisSector +"', @activeIngredientName = '"+ activeIngredientName +"', " +
            "@chemicalName = '"+ chemicalName +"', @genericProductName = '"+ genericProductName +"', " +
            "@distinctiveProductName = '"+ distinctiveProductName +"', @companyNameMaker = '"+ companyNameMaker +"', " +
            "@expirationDate = '"+ expirationDate +"', @expirationDateMessage = '"+ expirationDateMessage +"', " +
            "@medicationPackage = '"+ medicationPackage +"', @pharmaceuticalForm = '"+ pharmaceuticalForm +"', " +
            "@specialConditionsTransport = '"+ specialConditionsTransport +"', @healthRegistryAuthorizationFolio = '"+ healthRegistryAuthorizationFolio +"', " +
            "@importPermitFolio = '"+ importPermitFolio +"', @vucemImportFolio = '"+ vucemImportFolio +"', " +
            "@chemicalAbstractsServiceNumber = '"+ chemicalAbstractsServiceNumber +"', @importCompanyName = '"+ importCompanyName +"', " +
            "@healthRegistrationNumberPesticidesFertilizers = '"+ healthRegistrationNumberPesticidesFertilizers +"', " +
            "@manufacturerInformation = '"+ manufacturerInformation +"', @formulatorData = '"+ formulatorData +"', " +
            "@maquiladoraData = '"+ maquiladoraData +"', @authorizedUse = '"+ authorizedUse +"', @excelRow = '"+ excelRow +"', @customsClearance = '"+ customsClearance +"'");
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP_ORDER_PRODUCTS_EXCEL_V2: async (_: any, {input}: any) => {
        const { 
            idTripOrder,
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
            const newid = await tripOrderProducts.query("exec create_tripOrderProducts_excel_v2 " +
            "@idTripOrder = '"+ idTripOrder +"', @productName = '"+ productName +"', @productNameMessage = '"+ productNameMessage +"', " +
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
    UPDATE_TRIP_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idTripOrderProduct,
            idTripOrder, 
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
            const newid = await tripOrderProducts.query("exec update_tripOrderProducts " +
                "@idTripOrderProduct = '"+ idTripOrderProduct + 
                "', @idTripOrder = '"+ idTripOrder +
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
    DELETE_ALL_TRIP_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idTripOrder,
            userLoggedIn, 
        } = input;
        try {
            await tripOrderProducts.query("exec delete_all_products_tripOrder @idTripOrder = '"+ idTripOrder +"', @userLoggedIn = '"+ userLoggedIn +"' ");

            return 'Registros eliminados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default tripOrderProductsMutations;