import { tollRates } from "../../../db/Entities/tollRates";

const tollRatesMutations = {

    CREATE_TOLLRATE: async (_: any, {input}: any) => {
        const {
            idTollBooth,
			name,
            rate,
            userLoggedIn
        } = input;

        try {
            await tollRates.query("exec set_tollRates " +
                "@name = '" + name + "', " +
                "@idTollBooths = '" + idTollBooth + "', " +
                "@rate = '" + rate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Importe de peaje creado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TOLLRATE: async (_: any, {input}: any) => {
        const {
            idTollRate,
            name,
            idTollBooth,
            rate,
            userLoggedIn,
            status
        } = input;

        try {
            await tollRates.query("exec update_tollRates " +
                "@idTollRate = '" + idTollRate + "', " +
                "@name = '" + name + "', " +
                "@idTollBooths = '" + idTollBooth + "', " +
                "@rate = '" + rate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@status = '" + status + "' "
            );
            return 'Importe de peaje actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
};

export default tollRatesMutations;