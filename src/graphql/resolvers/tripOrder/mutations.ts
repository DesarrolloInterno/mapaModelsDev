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
};

export default tripOrderMutations;