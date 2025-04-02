import { tripOrder } from "../../../db/Entities/tripOrder";

const tripOrderMutations = {

    CREATE_TRIPORDER: async (_: any, {input}: any) => {
        const {
            orderDate,
			tripType,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await tripOrder.query("exec create_tripOrder " +
                "@orderDate = '" + orderDate + "', " +
                "@tripType = '" + tripType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return 'Orden de viaje creada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_ORDER_PRIORITY: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			orderPriority,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_orderPriority " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@orderPriority = '" + orderPriority + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Prioridad de orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_ORDER_PRIORITY: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec delete_tripOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Orden de viaje eliminada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_CUSTOMSCLEARNCE: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			customsClearance,
            userLoggedIn,
            customsClearanceMessage
        } = input;

        try {
            const newid = await tripOrder.query("exec update_customsClearance_tripOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@customsClearanceMessage = '" + customsClearanceMessage + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    SET_CLIENT_TRIPORDER: async (_: any, {input}: any) => {
        const {
            idClient,
			idTripOrder,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec set_client_tripOrder " +
                "@idClient = '" + idClient + "', " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Cliente asignado a orden de viaje correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_SALEFORMAT_TRIPORDER: async (_: any, {input}: any) => {
        const {
            idSalesFormat,
			idTripOrder,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec set_salesFormat_tripOrder " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Cliente asignado a orden de viaje correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRIPORDER_MOORINGGEAR: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			wheelChocks,
            straps,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_tripOrder_mooringGear " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@wheelChocks = '" + wheelChocks + "', " +
                "@straps = '" + straps + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Equipo de amarre actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_DYNAMIC_TRIPORDER: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            isCrossing,
            idSalesFormatCrossing,
            containers,
            shippingLines,
            userLoggedIn,
            idClient,
            idSalesFormat
        } = input;

        try {
            await tripOrder.query("exec update_dynamic_tripOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@idSalesFormatCrossing = '" + idSalesFormatCrossing + "', " +
                "@containers = '" + containers + "', " +
                "@shippingLines = '" + shippingLines + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_DYNAMIC_TRIPORDER2: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            isCrossing,
            containers,
            shippingLines,
            userLoggedIn,
            idClient,
            idSalesFormat
        } = input;

        try {
            await tripOrder.query("exec update_dynamic_tripOrder2 " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@containers = '" + containers + "', " +
                "@shippingLines = '" + shippingLines + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_DYNAMIC_TRAVELASSIGNMENT_TRIPORDER: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            isCrossing,
            userLoggedIn,
            idClient,
            idSalesFormat,
            idUnit,
            idTruckBox,
            idOperator
        } = input;

        try {
            await tripOrder.query("exec update_dynamic_travelAssignment " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOperator = '" + idOperator + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_DYNAMIC_TRAVELASSIGNMENT_TRIPORDERCROSSING: async (_: any, {input}: any) => {
        const {
            idTrip,
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            userLoggedIn,
            idClient,
            idSalesFormat,
            idUnit,
            idTruckBox,
            idOperator
        } = input;

        try {
            await tripOrder.query("exec update_dynamic_travelAssignmentCrossing " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOperator = '" + idOperator + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_DYNAMIC_TRAVELASSIGNMENT_TRIPCROSSING: async (_: any, {input}: any) => {
        const {
            idTrip,
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            userLoggedIn,
            idClient,
            idSalesFormat,
            idUnit,
            idTruckBox,
            idOperator
        } = input;

        try {
            await tripOrder.query("exec update_dynamic_travelAssignmentCrossing_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOperator = '" + idOperator + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_DYNAMIC_TRIPORDERCROSSING: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            containers,
            shippingLines,
            userLoggedIn,
            idClient,
            idSalesFormat
        } = input;

        try {
            await tripOrder.query("exec update_dynamic_tripOrderCrossing " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@containers = '" + containers + "', " +
                "@shippingLines = '" + shippingLines + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CONFIRM_TRIPORDER: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            userLoggedIn
        } = input;

        try {
            const response = await tripOrder.query("exec confirm_tripOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIPORDER_CROSSING: async (_: any, {input}: any) => {
        const {
            orderDate,
			tripType,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await tripOrder.query("exec create_tripOrderCrossing " +
                "@orderDate = '" + orderDate + "', " +
                "@tripType = '" + tripType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return 'Orden de viaje creada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRIPORDER_SALESFORMATCROSSING: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			idSalesFormatCrossing,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_tripOrder_SalesFormatCrossing " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idSalesFormatCrossing = '" + idSalesFormatCrossing + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Formato de venta de cruce actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRIPORDER_PRODUCT: async (_: any, {input}: any) => {
        const {
            idTripOrderProduct,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec delete_tripOrder_product " +
                "@idTripOrderProduct = '" + idTripOrderProduct + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Producto de orden de viaje eliminado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRAVEL_ASSIGNMENT_TRIPCROSSING: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			idTripCrossing,
            numTripOrigin,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_tripCrossing " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idTripCrossing = '" + idTripCrossing + "', " +
                "@numTripOrigin = '" + numTripOrigin + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Asignación de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    CREATE_TRIP_ORDER_CROSSING_FROM_TRAVEL_ASIGNMENT: async (_: any, {input}: any) => {
        const {
            userLoggedIn,
            idEnterprise,
            idTrip
        } = input;

        try {
            const newRecord = await tripOrder.query("exec create_tripOrderCrossing_from_travelAsignment " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idTrip = '" + idTrip + "'"
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_ORDER_AMOUNTS: async (_: any, {input}: any) => {
        const { 
            idTripOrderAmounts,
            idInvoicingConcept,
            invoicingConcept,
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
            status,
            idTripOrder,
            taxRate
        } = input;
        try {
            await tripOrder.query("exec update_tripOrderAmounts " + 
                "@idTripOrderAmounts = '"+idTripOrderAmounts+
                "', @idInvoicingConcept = '"+idInvoicingConcept+
                "', @invoicingConcept = '"+invoicingConcept+
                "', @subtotal = '"+subtotal+
                "', @idIVApercentage = '"+idIVApercentage+
                "', @IVApercentage = '"+IVApercentage+
                "', @IVA = '"+IVA+
                "', @idRETpercentage = '"+idRETpercentage+
                "', @RETpercentage = '"+RETpercentage+
                "', @RET = '"+RET+
                "', @totalAmount = '"+totalAmount+
                "', @idSalesFormat = '"+idSalesFormat+
                "', @codeMeasuringUnit = '"+codeMeasuringUnit+
                "', @measuringUnit = '"+measuringUnit+
                "', @userLoggedIn = '"+userLoggedIn+
                "', @status = '"+status+
                "', @idTripOrder = '"+idTripOrder+
                "', @taxRate = '"+taxRate+"'"
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIP_ORDER_AMOUNTS_BY_ID_TRIP_ORDER: async (_: any, {input}: any) => {
        const { 
            idTripOrder,
            userLoggedIn
        } = input;
        try {
            await tripOrder.query("exec delete_tripAmounts_by_idTrip " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    }
};

export default tripOrderMutations;