import { tripOrder } from "../../../db/Entities/tripOrder";

const tripOrderMutations = {

    CREATE_TRIPORDER: async (_: any, {input}: any) => {
        const {
            orderDate,
			tripType,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec create_tripOrder " +
                "@orderDate = '" + orderDate + "', " +
                "@tripType = '" + tripType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
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
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_customsClearance_tripOrder " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Regimen aduanero actualizado correctamente'
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
            userLoggedIn
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
                "@userLoggedIn = '" + userLoggedIn + "' "
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
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec create_tripOrderCrossing " +
                "@orderDate = '" + orderDate + "', " +
                "@tripType = '" + tripType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Orden de viaje creada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
};

export default tripOrderMutations;