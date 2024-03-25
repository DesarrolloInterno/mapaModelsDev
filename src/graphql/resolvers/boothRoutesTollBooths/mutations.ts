import { boothRoutes_tollBooths } from "../../../db/Entities/boothRoutesTollBooths";

const boothRoutesTollBoothsMutations = {

    CREATE_BOOTHROUTE_TOLLBOOTH: async (_: any, {input}: any) => {
        const {
			idBoothRoute,
            idTollBooth,
            orderTollBooths,
            userLoggedIn
        } = input;

        try {
           await boothRoutes_tollBooths.query("exec set_boothRoutes_tollBooths " +
                "@idBoothRoute = '" + idBoothRoute + "', " +
                "@idTollBooth = '" + idTollBooth + "', " +
                "@orderTollBooths = '" + orderTollBooths + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Registro creado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_BOOTHROUTE_TOLLBOOTH: async (_: any, {input}: any) => {
        const {
            idBoothRoutesTollBooths,
            idBoothRoute,
            idTollBooth,
            orderTollBooths,
            userLoggedIn,
            status
        } = input;

        try {
            await boothRoutes_tollBooths.query("exec update_boothRoutes_tollBooths " +
                "@idBoothRoutesTollBooths = '" + idBoothRoutesTollBooths + "', " +
                "@idBoothRoute = '" + idBoothRoute + "', " +
                "@idTollBooth = '" + idTollBooth + "', " +
                "@orderTollBooths = '" + orderTollBooths + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@status = '" + status + "' "
            );
            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    

};

export default boothRoutesTollBoothsMutations;