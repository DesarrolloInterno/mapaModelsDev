import { clientTravelOrder } from "../../../db/Entities/clientTravelOrder";

const ClientTravelOrderMutations = {
    UPDATE_CLIENT_TRAVEL_ORDER_FORM: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            idClient,
            name,
            shipmentDate,
            bussinesName,
            fullAddress,
            RFC,
            TAXID,
            idOriginAddres,
            addressOrigin,
            outsideAddressNumberOrigin,
            insideAddressNumberOrigin,
            neighborhoodOrigin,
            zipCodeOrigin,
            idCountryOrigin,
            countryOrigin,
            idStateOrigin,
            idTownOrigin,
            townOrigin,
            idDestinationAddres,
            addressDestination,
            outsideAddressNumberDestination,
            insideAddressNumberDestination,
            neighborhoodDestination,
            zipCodeDestination,
            idCountryDestination,
            countryDestination,
            idStateDestination,
            idTownDestination,
            townDestination,
            subtotal,
            IVA,
            RET,
            total,
            loadingInstructions,
            unloadingInstructions,
            status,
            stateOrigin,
            stateDestination,
            idSalesFormat
        } = input;
        try {
            const message = await clientTravelOrder.query("exec update_clientTravelOrderForm " +
            "@idClientTravelOrder = '"+idClientTravelOrder+"', " +
            "@idClient = '"+idClient+"', " +
            "@name = '"+name+"', " +
            "@shipmentDate = '"+shipmentDate+"', " +
            "@bussinesName = '"+bussinesName+"', " +
            "@fullAddress = '"+fullAddress+"', " +
            "@RFC = '"+RFC+"', " +
            "@TAXID = '"+TAXID+"', " +
            "@idOriginAddres = '"+idOriginAddres+"', " +
            "@addressOrigin = '"+addressOrigin+"', " +
            "@outsideAddressNumberOrigin = '"+outsideAddressNumberOrigin+"', " +
            "@insideAddressNumberOrigin = '"+insideAddressNumberOrigin+"', " +
            "@neighborhoodOrigin = '"+neighborhoodOrigin+"', " +
            "@zipCodeOrigin = '"+zipCodeOrigin+"', " +
            "@idCountryOrigin = '"+idCountryOrigin+"', " +
            "@countryOrigin = '"+countryOrigin+"', " +
            "@idStateOrigin = '"+idStateOrigin+"', " +
            "@idTownOrigin = '"+idTownOrigin+"', " +
            "@townOrigin = '"+townOrigin+"', " +
            "@idDestinationAddres = '"+idDestinationAddres+"', " +
            "@addressDestination = '"+addressDestination+"', " +
            "@outsideAddressNumberDestination = '"+outsideAddressNumberDestination+"', " +
            "@insideAddressNumberDestination = '"+insideAddressNumberDestination+"', " +
            "@neighborhoodDestination = '"+neighborhoodDestination+"', " +
            "@zipCodeDestination = '"+zipCodeDestination+"', " +
            "@idCountryDestination = '"+idCountryDestination+"', " +
            "@countryDestination = '"+countryDestination+"', " +
            "@idStateDestination = '"+idStateDestination+"', " +
            "@idTownDestination = '"+idTownDestination+"', " +
            "@townDestination = '"+townDestination+"', " +
            "@subtotal = '"+subtotal+"', " +
            "@IVA = '"+IVA+"', " +
            "@RET = '"+RET+"', " +
            "@total = '"+total+"', " +
            "@loadingInstructions = '"+loadingInstructions+"', " +
            "@unloadingInstructions = '"+unloadingInstructions+"', " +
            "@status = '"+status+"', " +
            "@stateDestination = '"+stateDestination+"', " +
            "@stateOrigin = '"+stateOrigin+"', " +
            "@idSalesFormat = '"+idSalesFormat+"' ");
            return message
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idClient, id, documentLink} = input;
        try {
            await clientTravelOrder.query("exec set_link_document_clientDocuments @idClient = '"+idClient+"', @id = '"+id+"', @documentLink = '"+documentLink+"'");
            return 'Documento actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CUSTOMSCLEARNCE_CLIENT: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
			customsClearance,
            userLoggedIn,
            customsClearanceMessage
        } = input;

        try {
            const newid = await clientTravelOrder.query("exec update_customsClearance_clientTravelOrder " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@customsClearanceMessage = '" + customsClearanceMessage + "' "
            );
            return newid
        } catch (error) {
            console.log(error);
        }
    },
    AUTORIZE_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            status,
            userLoggedIn,
            rejectReason,
            idSalesFormat
        } = input;

        try {
            const data = await clientTravelOrder.query("exec autorize_clientTravelOrder " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@status = '" + status + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@rejectReason = '" + rejectReason + "', " +
                "@idSalesFormat = '" + idSalesFormat + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP_ORDER_FROM_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            name,
            idClient,
            idOrigin,
            idDestination,
            userLoggedIn,
            fullAddressOrigin,
            fullAddressDestination,
            idSalesFormat,
            subtotal,
            IVA,
            RET,
            total,
            countryOrigin,
            countryDestination,
            tripType,
            customsClearance
        } = input;

        try {
            const data = await clientTravelOrder.query("exec create_tripOrder_from_clientTravelOrder " +
                "@name = '" + name + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@fullAddressOrigin = '" + fullAddressOrigin + "', " +
                "@fullAddressDestination = '" + fullAddressDestination + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@subtotal = '" + subtotal + "', " +
                "@IVA = '" + IVA + "', " +
                "@RET = '" + RET + "', " +
                "@total = '" + total + "', " +
                "@countryOrigin = '" + countryOrigin + "', " +
                "@countryDestination = '" + countryDestination + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@tripType = '" + tripType + "', " +
                "@customsClearance = '" + customsClearance + "' "
                
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    SET_DATA_FROM_SALES_FORMAT: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            name,
            legendOriginCollection,
            legendDestinationCollection,
            travelClassification,
            kilometres,
            travelTime,
            temperature,
            currencye,
            taxes,
            isRefrigerated,
            isDry,
            isDoorDoor,
            isCrossing,
            isEmpty,
            isEmptyPaid,
            idSalesFormat,
            operatorComments,
            operationComments,
            observations,
            americanPortion,
            crossingPortion,
            mexicanPortion,
            requestProofDelivery,
            crossingType,
            productDescription,
            currency,
            typeCrossing,
        } = input;

        try {
            const data = await clientTravelOrder.query("exec set_data_salesFormat " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@name = '" + name + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@travelClassification = '" + travelClassification + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@travelTime = '" + travelTime + "', " +
                "@temperature = '" + temperature + "', " +
                "@currencye = '" + currencye + "', " +
                "@taxes = '" + taxes + "', " +
                "@isRefrigerated = '" + isRefrigerated + "', " +
                "@isDry = '" + isDry + "', " +
                "@isDoorDoor = '" + isDoorDoor + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@isEmpty = '" + isEmpty + "', " +
                "@isEmptyPaid = '" + isEmptyPaid + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@operatorComments = '" + operatorComments + "', " +
                "@operationComments = '" + operationComments + "', " +
                "@observations = '" + observations + "', " +
                "@americanPortion = '" + americanPortion + "', " +
                "@crossingPortion = '" + crossingPortion + "', " +
                "@mexicanPortion = '" + mexicanPortion + "', " +
                "@requestProofDelivery = '" + requestProofDelivery + "', " +
                "@crossingType = '" + crossingType + "', " +
                "@productDescription = '" + productDescription + "', " +
                "@currency = '" + currency + "', " +
                "@typeCrossing = '" + typeCrossing + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    SET_DOCUMENTS_FROM_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            nameDocument,
            userLoggedIn
        } = input;

        try {
            const data = await clientTravelOrder.query("exec set_documents_from_clientTravelOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@nameDocument = '" + nameDocument + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    SET_SAFETY_EQUIPMENTS_FROM_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            name,
            description,
            userLoggedIn
        } = input;

        try {
            const data = await clientTravelOrder.query("exec set_safetyEquipment_from_clientTravelOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    SET_PRODUCTS_FROM_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            productName,
            productCode,
            codeUnit,
            cargoQuantity,
            cargoWeight,
            weightUnit,
            hazardousMaterial,
            codeHazardousMaterial,
            codePackaging,
            declarationNumberPart1,
            declarationNumberPart2,
            declarationNumberPart3,
            declarationNumberPart4,
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
            authorizedUse
        } = input;

        try {
            const data = await clientTravelOrder.query("exec set_products_from_clientTravelOrder " +
                
                "@idTripOrder = '" + idTripOrder + "', " +
                "@productName = '" + productName + "', " +
                "@productCode = '" + productCode + "', " +
                "@codeUnit = '" + codeUnit + "', " +
                "@cargoQuantity = '" + cargoQuantity + "', " +
                "@cargoWeight = '" + cargoWeight + "', " +
                "@weightUnit = '" + weightUnit + "', " +
                "@hazardousMaterial = '" + hazardousMaterial + "', " +
                "@codeHazardousMaterial = '" + codeHazardousMaterial + "', " +
                "@codePackaging = '" + codePackaging + "', " +
                "@declarationNumberPart1 = '" + declarationNumberPart1 + "', " +
                "@declarationNumberPart2 = '" + declarationNumberPart2 + "', " +
                "@declarationNumberPart3 = '" + declarationNumberPart3 + "', " +
                "@declarationNumberPart4 = '" + declarationNumberPart4 + "', " +
                "@tariffCode = '" + tariffCode + "', " +
                "@foeringTradeUUID = '" + foeringTradeUUID + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@documentTypeCode = '" + documentTypeCode + "', " +
                "@materialTypeCode = '" + materialTypeCode + "', " +
                "@materialDescription = '" + materialDescription + "', " +
                "@rfcImporter = '" + rfcImporter + "', " +
                "@cofeprisSector = '" + cofeprisSector + "', " +
                "@activeIngredientName = '" + activeIngredientName + "', " +
                "@chemicalName = '" + chemicalName + "', " +
                "@genericProductName = '" + genericProductName + "', " +
                "@distinctiveProductName = '" + distinctiveProductName + "', " +
                "@companyNameMaker = '" + companyNameMaker + "', " +
                "@expirationDate = '" + expirationDate + "', " +
                "@medicationPackage = '" + medicationPackage + "', " +
                "@pharmaceuticalForm = '" + pharmaceuticalForm + "', " +
                "@specialConditionsTransport = '" + specialConditionsTransport + "', " +
                "@healthRegistryAuthorizationFolio = '" + healthRegistryAuthorizationFolio + "', " +
                "@importPermitFolio = '" + importPermitFolio + "', " +
                "@vucemImportFolio = '" + vucemImportFolio + "', " +
                "@chemicalAbstractsServiceNumber = '" + chemicalAbstractsServiceNumber + "', " +
                "@importCompanyName = '" + importCompanyName + "', " +
                "@healthRegistrationNumberPesticidesFertilizers = '" + healthRegistrationNumberPesticidesFertilizers + "', " +
                "@manufacturerInformation = '" + manufacturerInformation + "', " +
                "@formulatorData = '" + formulatorData + "', " +
                "@maquiladoraData = '" + maquiladoraData + "', " +
                "@authorizedUse = '" + authorizedUse + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    SET_TRAVEL_PICKUPS_FROM_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idClientLocation,
            idTripOrder,
            idRowProduct,
            kilometres,
            productQuantity,
            productWeight,
            measuringUnit,
            appointmentDate,
            userLoggedIn,
            typeLoad
        } = input;

        try {
            const data = await clientTravelOrder.query("exec set_travelPickups_from_clientTravelOrder " +
                
                "@idClientLocation = '" + idClientLocation + "', " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idRowProduct = '" + idRowProduct + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@productQuantity = '" + productQuantity + "', " +
                "@productWeight = '" + productWeight + "', " +
                "@measuringUnit = '" + measuringUnit + "', " +
                "@appointmentDate = '" + appointmentDate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@typeLoad = '" + typeLoad + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    REJECT_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            status,
            userLoggedIn,
            rejectReason
        } = input;

        try {
            const data = await clientTravelOrder.query("exec reject_clientTravelOrder " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@status = '" + status + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@rejectReason = '" + rejectReason + "' "
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_CLIENT_TRAVEL_ORDER_REQUEST: async (_: any, {input}: any) => {
        const {
			idClient,
            userLoggedIn
        } = input;

        try {
            const newRecord = await clientTravelOrder.query("exec create_clientTravelOrder_request " +
            "@idClient = '"+idClient+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            userLoggedIn
        } = input;

        try {
            await clientTravelOrder.query("exec delete_clientTravelOrder " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    SET_CLIENT_TRAVEL_ORDER_CUSTOMS_CLEARANCE: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            customsClearance,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await clientTravelOrder.query("exec set_clientTravelOrder_customsClearance " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_ALL_CLIENT_TRAVEL_ORDER_CUSTOMS_CLEARANCE: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            userLoggedIn
        } = input;

        try {
            await clientTravelOrder.query("exec delete_all_clientTravelOrder_customsClearance " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Régimen aduanero eliminado correctamente'
        } catch (error) {
            console.log(error);
        }

    }
}

export default ClientTravelOrderMutations;