import { trip } from "../../../db/Entities/trip";

const tripMutations = {
    UPDATE_TOTALWEIGHT_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn,
        } = input;

        try {
            await trip.query("exec update_totalWeight_tripProducts " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Peso total de viaje actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
};

export default tripMutations;