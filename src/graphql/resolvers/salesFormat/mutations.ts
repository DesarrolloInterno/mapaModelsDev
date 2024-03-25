import { salesFormat } from "../../../db/Entities/salesFormat";

const salesFormatMutations = {

    CREATE_SALESFORMAT: async (_: any, {input}: any) => {
        const {
            name,
            idClient,
            idOrigin,
            idDestination,
            legendOriginCollection,
            legendDestinationCollection,
            travelClassification,
            kilometres,
            travelTime,
            temperature,
            tripType,
            currency,
            taxes,
            isRefrigerated,
            isDry,
            isDoorDoor,
            isCrossing,
            isEmpty,
            isEmptyPaid,
            idSalesFormatCrossing,
            operatorComments,
            operationComments,
            observations,
            americanPortion,
            crossingPortion,
            mexicanPortion,
            requestProofDelivery,
            userLoggedIn,
            productDescription,
            crossingType,
            typeCrossing
        } = input;

        try {
            const newRecord = await salesFormat.query("exec create_salesFormat " +
                "@name = '" + name + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@travelClassification = '" + travelClassification + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@travelTime = '" + travelTime + "', " +
                "@temperature = '" + temperature + "', " +
                "@tripType = '" + tripType + "', " +
                "@currency = '" + currency + "', " +
                "@taxes = '" + taxes + "', " +
                "@isRefrigerated = '" + isRefrigerated + "', " +
                "@isDry = '" + isDry + "', " +
                "@isDoorDoor = '" + isDoorDoor + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@isEmpty = '" + isEmpty + "', " +
                "@isEmptyPaid = '" + isEmptyPaid + "', " +
                "@idSalesFormatCrossing = '" + idSalesFormatCrossing + "', " +
                "@operatorComments = '" + operatorComments + "', " +
                "@operationComments = '" + operationComments + "', " +
                "@observations = '" + observations + "', " +
                "@americanPortion = '" + americanPortion + "', " +
                "@crossingPortion = '" + crossingPortion + "', " +
                "@mexicanPortion = '" + mexicanPortion + "', " +
                "@requestProofDelivery = '" + requestProofDelivery + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', "+
                "@productDescription = '" + productDescription + "', "+
                "@crossingType = '" + crossingType + "', "+
                "@typeCrossing = '" + typeCrossing + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_SALESFORMAT: async (_: any, {input}: any) => {
        const {
            idSalesFormat,
            name,
            idClient,
            idOrigin,
            idDestination,
            legendOriginCollection,
            legendDestinationCollection,
            travelClassification,
            kilometres,
            travelTime,
            temperature,
            tripType,
            currency,
            taxes,
            isRefrigerated,
            isDry,
            isDoorDoor,
            isCrossing,
            isEmpty,
            isEmptyPaid,
            idSalesFormatCrossing,
            operatorComments,
            operationComments,
            observations,
            americanPortion,
            crossingPortion,
            mexicanPortion,
            requestProofDelivery,
            userLoggedIn,
            productDescription,
            crossingType,
            typeCrossing
        } = input;

        try {
            const newRecord = await salesFormat.query("exec update_salesFormat " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@name = '" + name + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@travelClassification = '" + travelClassification + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@travelTime = '" + travelTime + "', " +
                "@temperature = '" + temperature + "', " +
                "@tripType = '" + tripType + "', " +
                "@currency = '" + currency + "', " +
                "@taxes = '" + taxes + "', " +
                "@isRefrigerated = '" + isRefrigerated + "', " +
                "@isDry = '" + isDry + "', " +
                "@isDoorDoor = '" + isDoorDoor + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@isEmpty = '" + isEmpty + "', " +
                "@isEmptyPaid = '" + isEmptyPaid + "', " +
                "@idSalesFormatCrossing = '" + idSalesFormatCrossing + "', " +
                "@operatorComments = '" + operatorComments + "', " +
                "@operationComments = '" + operationComments + "', " +
                "@observations = '" + observations + "', " +
                "@americanPortion = '" + americanPortion + "', " +
                "@crossingPortion = '" + crossingPortion + "', " +
                "@mexicanPortion = '" + mexicanPortion + "', " +
                "@requestProofDelivery = '" + requestProofDelivery + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', "+
                "@productDescription = '" + productDescription + "', "+
                "@crossingType = '" + crossingType + "', "+
                "@typeCrossing = '" + typeCrossing + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    SET_SALESFORMAT_BOOTHROUTE: async (_: any, {input}: any) => {
        const { 
            idSalesFormat,
            idBoothRoute,
            type,
            routeOrder,
            userLoggedIn,
            isReversible
        } = input;
        try {
            await salesFormat.query("exec set_salesFormatBoothRoute @idSalesFormat = '"+idSalesFormat+"', @idBoothRoute = '"+idBoothRoute+"', @type = '"+type+"', @routeOrder = '"+routeOrder+"', @userLoggedIn = '"+userLoggedIn+"', @isReversible = '"+isReversible+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_SALESFORMAT_BOOTHROUTE: async (_: any, {input}: any) => {
        const { 
            idSalesFormatBoothRoute,
            idSalesFormat,
            idBoothRoute,
            type,
            routeOrder,
            userLoggedIn,
            status,
            isReversible
        } = input;
        try {
            await salesFormat.query("exec update_salesFormatBoothRoute @idSalesFormatBoothRoute = '"+idSalesFormatBoothRoute+"', @idSalesFormat = '"+idSalesFormat+"', @idBoothRoute = '"+idBoothRoute+"', @type = '"+type+"', @routeOrder = '"+routeOrder+"', @userLoggedIn = '"+userLoggedIn+"', @status = '"+status+"', @isReversible = '"+isReversible+"'");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_SALESFORMAT_AMOUNTS: async (_: any, {input}: any) => {
        const { 
            idInvoicingConcept,
            subtotal,
            idIVApercentage,
            IVApercentage,
            IVA,
            idRETpercentage,
            RETpercentage,
            RET,
            totalAmount,
            idSalesFormat,
            codeMeasuringUnit,
            measuringUnit,
            userLoggedIn,
        } = input;
        try {
            await salesFormat.query("exec set_salesFormatAmounts @idInvoicingConcept = '"+idInvoicingConcept+"', @subtotal = '"+subtotal+"', @idIVApercentage = '"+idIVApercentage+"', @IVApercentage = '"+IVApercentage+"', @IVA = '"+IVA+"', @idRETpercentage = '"+idRETpercentage+"', @RETpercentage = '"+RETpercentage+"', @RET = '"+RET+"', @totalAmount = '"+totalAmount+"', @idSalesFormat = '"+idSalesFormat+"', @codeMeasuringUnit = '"+codeMeasuringUnit+"', @measuringUnit = '"+measuringUnit+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_SALESFORMAT_AMOUNTS: async (_: any, {input}: any) => {
        const { 
            idSalesFormatAmounts,
            idInvoicingConcept,
            subtotal,
            idIVApercentage,
            IVApercentage,
            IVA,
            idRETpercentage,
            RETpercentage,
            RET,
            totalAmount,
            idSalesFormat,
            codeMeasuringUnit,
            measuringUnit,
            userLoggedIn,
            status
        } = input;
        try {
            await salesFormat.query("exec update_salesFormatAmounts @idSalesFormatAmounts = '"+idSalesFormatAmounts+"', @idInvoicingConcept = '"+idInvoicingConcept+"', @subtotal = '"+subtotal+"', @idIVApercentage = '"+idIVApercentage+"', @IVApercentage = '"+IVApercentage+"', @IVA = '"+IVA+"', @idRETpercentage = '"+idRETpercentage+"', @RETpercentage = '"+RETpercentage+"', @RET = '"+RET+"', @totalAmount = '"+totalAmount+"', @idSalesFormat = '"+idSalesFormat+"', @codeMeasuringUnit = '"+codeMeasuringUnit+"', @measuringUnit = '"+measuringUnit+"', @userLoggedIn = '"+userLoggedIn+"', @status = '"+status+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_SALESFORMAT_DOCUMENTSPROOFDELIVERY: async (_: any, {input}: any) => {
        const { 
            idSalesFormat,
            name,
            userLoggedIn,
        } = input;
        try {
            await salesFormat.query("exec set_salesFormatDocumentsProofDelivery @idSalesFormat = '"+idSalesFormat+"', @name = '"+name+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_SALESFORMAT_DOCUMENTSPROOFDELIVERY: async (_: any, {input}: any) => {
        const { 
            idSalesFormatDocumentsProofDelivery,
            idSalesFormat,
            name,
            userLoggedIn,
            status
        } = input;
        try {
            await salesFormat.query("exec update_salesFormatDocumentsProofDelivery @idSalesFormatDocumentsProofDelivery = '"+idSalesFormatDocumentsProofDelivery+"', @idSalesFormat = '"+idSalesFormat+"', @name = '"+name+"', @userLoggedIn = '"+userLoggedIn+"', @status = '"+status+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_SALESFORMAT_SAFTYEQUIPMENT: async (_: any, {input}: any) => {
        const { 
            idSalesFormat,
            name,
            description,
            userLoggedIn,
        } = input;
        try {
            await salesFormat.query("exec set_salesFormatSafetyEquipment @idSalesFormat = '"+idSalesFormat+"', @name = '"+name+"', @description = '"+description+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_SALESFORMAT_SAFTYEQUIPMENT: async (_: any, {input}: any) => {
        const { 
            idSalesFormatSafetyEquipment,
            idSalesFormat,
            name,
            description,
            userLoggedIn,
            status
        } = input;
        try {
            await salesFormat.query("exec update_salesFormatSafetyEquipment @idSalesFormatSafetyEquipment = '"+idSalesFormatSafetyEquipment+"', @idSalesFormat = '"+idSalesFormat+"', @name = '"+name+"', @description = '"+description+"', @userLoggedIn = '"+userLoggedIn+"', @status = '"+status+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_SALESFORMAT: async (_: any, {input}: any) => {
        const {
            idSalesFormat,
            userLoggedIn
        } = input;

        try {
            await salesFormat.query("exec delete_salesFormat " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default salesFormatMutations;