import { clientTravelOrderProducts } from "../../../db/Entities/clientTravelOrderProducts";

const clientTravelOrderProductsMutations = {

    CREATE_CLIENT_TRAVEL_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idClientTravelOrder, 
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
            customsDocumentIdentifierMessage
        } = input;
        try {
            const newid = await clientTravelOrderProducts.query("exec create_clientTravelOrderProducts " +
                "@idClientTravelOrder = '"+ idClientTravelOrder +
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
    UPDATE_CLIENT_TRAVEL_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idClientTravelOrderProduct,
            idClientTravelOrder, 
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
            const newid = await clientTravelOrderProducts.query("exec update_clientTravelOrderProducts " +
                "@idClientTravelOrderProduct = '"+ idClientTravelOrderProduct +
                "', @idClientTravelOrder = '"+ idClientTravelOrder +
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
    DELETE_CLIENT_TRAVEL_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idClientTravelOrderProduct,
            userLoggedIn, 
        } = input;
        try {
            await clientTravelOrderProducts.query("exec delete_products_clientTravelOrder @idClientTravelOrderProduct = '"+ idClientTravelOrderProduct +"', @userLoggedIn = '"+ userLoggedIn +"' ");

            return 'Registro eliminado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    SET_ID_CLIENT_TRAVEL_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            id,
            idClientTravelOrder, 
        } = input;
        try {
            await clientTravelOrderProducts.query("exec set_id_clientTravelOrderProducts @id = '"+ id +"', @idClientTravelOrder = '"+ idClientTravelOrder +"' ");

            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_ALL_CLIENT_TRAVEL_ORDER_PRODUCTS: async (_: any, {input}: any) => {
        const { 
            idClientTravelOrder,
            userLoggedIn, 
        } = input;
        try {
            await clientTravelOrderProducts.query("exec stp_delete_all_products_clientTravelOrder @idClientTravelOrder = '"+ idClientTravelOrder +"', @userLoggedIn = '"+ userLoggedIn +"' ");

            return 'Registros eliminados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_CLIENT_TRAVEL_ORDER_PRODUCTS_EXCEL_V2: async (_: any, {input}: any) => {
        const { 
            idClientTravelOrder,
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
            const newid = await clientTravelOrderProducts.query("exec create_clientTravelOrderProducts_excel_v2 " +
            "@idClientTravelOrder = '"+ idClientTravelOrder +"', @productName = '"+ productName +"', @productNameMessage = '"+ productNameMessage +"', " +
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

export default clientTravelOrderProductsMutations;