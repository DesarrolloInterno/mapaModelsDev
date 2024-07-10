import { tripOrder } from "../../../db/Entities/tripOrder";

const travelAssignmentMutations = {
    UPDATE_TRAVEL_ASSIGNMENT_UNIT: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			idUnit,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_unit " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Unidad asignada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRAVEL_ASSIGNMENT_UNIT_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
			idUnit,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_unit_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Unidad asignada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRAVEL_ASSIGNMENT_TRUCKBOX: async (_: any, {input}: any) => {
        const {
            idTripOrder,
			idTruckBox,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_truckBox " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Caja asignada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRAVEL_ASSIGNMENT_TRUCKBOX_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
			idTruckBox,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_truckBox_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Caja asignada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRAVER_ASSIGNMENT_OPERATOR: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            idOperator,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_operator " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Operador asignado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRAVER_ASSIGNMENT_OPERATOR_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            idOperator,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_travelAssignment_operator_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Operador asignado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP: async (_: any, {input}: any) => {
        const {
            idTripOrder,
            userLoggedIn
        } = input;

        try {
            const response = await tripOrder.query("exec create_trip_from_order " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_ORDER_PRIORITY_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
			orderPriority,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_orderPriority_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@orderPriority = '" + orderPriority + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Prioridad de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_CLIENT_TRIP: async (_: any, {input}: any) => {
        const {
            idClient,
			idTrip,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec set_client_trip " +
                "@idClient = '" + idClient + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Cliente asignado a viaje correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_SALEFORMAT_TRIP: async (_: any, {input}: any) => {
        const {
            idSalesFormat,
			idTrip,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec set_salesFormat_trip " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Cliente asignado a viaje correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRIP_SALESFORMATCROSSING: async (_: any, {input}: any) => {
        const {
            idTrip,
			idSalesFormatCrossing,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec update_trip_SalesFormatCrossing " +
                "@idTrip = '" + idTrip + "', " +
                "@idSalesFormatCrossing = '" + idSalesFormatCrossing + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Formato de venta de cruce actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRIP_CUSTOMSCLEARNCE: async (_: any, {input}: any) => {
        const {
            idTrip,
			customsClearance,
            userLoggedIn,
            customsClearanceMessage
        } = input;

        try {
            const newid = await tripOrder.query("exec update_customsClearance_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@customsClearanceMessage = '" + customsClearanceMessage + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRIP_PRODUCT: async (_: any, {input}: any) => {
        const {
            idTripProduct,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec delete_trip_product " +
                "@idTripProduct = '" + idTripProduct + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Producto de viaje eliminado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn
        } = input;

        try {
            await tripOrder.query("exec delete_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Viaje eliminada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_DYNAMIC_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
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
            await tripOrder.query("exec update_dynamic_trip " +
                "@idTrip = '" + idTrip + "', " +
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
            return 'Viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default travelAssignmentMutations;