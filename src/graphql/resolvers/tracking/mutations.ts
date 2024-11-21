import { tracking } from "../../../db/Entities/tracking";

const trackingMutations = {
    CREATE_TRACKING: async (_: any, {input}: any) => {
        const {
            idTrip,
            idClient,
            idOrigin,
            idDestination,
            idUnit,
            idTruckBox,
            idOperator,
            dateType,
            observations,
            trackingDate,
            status,
            userLoggedIn
        } = input;

        try {
            const newRecord = await tracking.query("exec create_tracking " +
                "@idTrip = '" + idTrip + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@dateType = '" + dateType + "', " +
                "@observations = '" + observations + "', " +
                "@trackingDate = '" + trackingDate + "', " +
                "@status = '" + status + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_CROSSING_TRACKING: async (_: any, {input}: any) => {
        const {
            idTrip,
            idClient,
            idOrigin,
            idDestination,
            idUnit,
            idTruckBox,
            idOperator,
            dateType,
            observations,
            trackingDate,
            status,
            userLoggedIn
        } = input;

        try {
            const newRecord = await tracking.query("exec create_crossingTracking " +
                "@idTrip = '" + idTrip + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@dateType = '" + dateType + "', " +
                "@observations = '" + observations + "', " +
                "@trackingDate = '" + trackingDate + "', " +
                "@status = '" + status + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP_ORDER_CROSSING_FROM_TRIP_TRACKING: async (_: any, {input}: any) => {
        const {
            orderDate,
            userLoggedIn,
            idEnterprise,
            idTrip
        } = input;

        try {
            const newRecord = await tracking.query("exec create_tripOrderCrossing_from_tripTracking " +
                "@orderDate = '" + orderDate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idTrip = '" + idTrip + "'"
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default trackingMutations;