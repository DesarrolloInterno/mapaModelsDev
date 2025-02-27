import { tripAdvance } from "../../../db/Entities/tripAdvance";

const tripAdvanceMutations = {

    CREATE_TRIPADVANCE: async (_: any, {input}: any) => {
        const {
			date,
            importAdvance,
            idTrip,
            tripOrderNumber,
            idUnit,
            idEmployee,
            comments,
            reference,
            relationTrip,
            userLoggedIn,
            idEnterprise,
            isDeadlines,
            quantityDeadlines

        } = input;

        try {
            const newRecord = await tripAdvance.query("exec create_tripAdvance " +
                "@date = '" + date + "', "+
                "@importAdvance = '" + importAdvance + "', "+
                "@idTrip = '" + idTrip + "', "+
                "@tripOrderNumber = '" + tripOrderNumber + "', "+
                "@idUnit = '" + idUnit + "', "+
                "@idEmployee = '" + idEmployee + "', "+
                "@comments = '" + comments + "', "+
                "@reference = '" + reference + "', "+
                "@relationTrip = '" + relationTrip + "', "+
                "@userLoggedIn = '" + userLoggedIn + "', "+
                "@idEnterprise = '" + idEnterprise + "', "+
                "@isDeadlines = '" + isDeadlines + "', "+
                "@quantityDeadlines = '" + quantityDeadlines + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRIPADVANCE: async (_: any, {input}: any) => {
        const {
            idTripAdvance,
            date,
            importAdvance,
            idTrip,
            tripOrderNumber,
            idUnit,
            idEmployee,
            comments,
            reference,
            relationTrip,
            userLoggedIn,
            idEnterprise,
            isDeadlines,
            quantityDeadlines
        } = input;

        try {
            const newRecord = await tripAdvance.query("exec update_tripAdvance " +
                "@idTripAdvance = '" + idTripAdvance + "', " +
                "@date = '" + date + "', " +
                "@importAdvance = '" + importAdvance + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@tripOrderNumber = '" + tripOrderNumber + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@comments = '" + comments + "', " +
                "@reference = '" + reference + "', " +
                "@relationTrip = '" + relationTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', "+
                "@isDeadlines = '" + isDeadlines + "', "+
                "@quantityDeadlines = '" + quantityDeadlines + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRIPADVANCE: async (_: any, {input}: any) => {
        const {
            idTripAdvance,
            userLoggedIn
        } = input;

        try {
            await tripAdvance.query("exec delete_tripAdvance " +
                "@idTripAdvance = '" + idTripAdvance + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    }
};

export default tripAdvanceMutations;