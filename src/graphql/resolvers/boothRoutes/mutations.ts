import { boothRoutes } from "../../../db/Entities/boothRoutes";

const boothRoutesMutations = {
    CREATE_BOOTHROUTE: async (_: any, {input}: any) => {
        const {
			name,
			idState,
			idTown,
			town,
            km,
            idDestinationState,
            idDestinationTown,
            destinationTown,
            isReversible,
            userLoggedIn
        } = input;

        try {
            const newRecord = await boothRoutes.query("exec create_boothRoutes " +
                "@name = '" + name + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@km = '" + km + "', " +
                "@idDestinationState = '" + idDestinationState + "', " +
                "@idDestinationTown = '" + idDestinationTown + "', " +
                "@destinationTown = '" + destinationTown + "', " +
                "@isReversible = '" + isReversible + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_BOOTHROUTE: async (_: any, {input}: any) => {
        const {
            idBoothRoutes,
			name,
			idState,
			idTown,
			town,
            km,
            idDestinationState,
            idDestinationTown,
            destinationTown,
            isReversible,
            userLoggedIn
        } = input;

        try {
            const newRecord = await boothRoutes.query("exec edit_boothRoutes " +
                "@idBoothRoutes = '" + idBoothRoutes + "', " +
                "@name = '" + name + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@km = '" + km + "', " +
                "@idDestinationState = '" + idDestinationState + "', " +
                "@idDestinationTown = '" + idDestinationTown + "', " +
                "@destinationTown = '" + destinationTown + "', " +
                "@isReversible = '" + isReversible + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_BOOTHROUTE: async (_: any, {input}: any) => {
        const {
            idBoothRoute,
            userLoggedIn
        } = input;

        try {
            await boothRoutes.query("exec delete_boothRoutes " +
                "@idBoothRoute = '" + idBoothRoute + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default boothRoutesMutations;