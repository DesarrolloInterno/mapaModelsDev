import { tollBooths } from "../../../db/Entities/tollBooths";

const tollBoothsMutations = {

    CREATE_TOLLBOOTH: async (_: any, {input}: any) => {
        const {
			name,
			idCountry,
			idState,
			idTown,
			town,
			latitude,
			longitude,
            userLoggedIn
        } = input;

        try {
            const newRecord = await tollBooths.query("exec create_tollBooths " +
                "@name = '" + name + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@latitude = '" + latitude + "', " +
                "@longitude = '" + longitude + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TOLLBOOTH: async (_: any, {input}: any) => {
        const {
            idTollBooth,
			name,
			idCountry,
			idState,
			idTown,
			town,
			latitude,
			longitude,
            userLoggedIn
        } = input;

        try {
            const newRecord = await tollBooths.query("exec update_tollBooths " +
                "@idTollBooth = '" + idTollBooth + "', " +
                "@name = '" + name + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@latitude = '" + latitude + "', " +
                "@longitude = '" + longitude + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TOLLBOOTH: async (_: any, {input}: any) => {
        const {
            idTollBooth,
            userLoggedIn
        } = input;

        try {
            await tollBooths.query("exec delete_tollBooth " +
                "@idTollBooth = '" + idTollBooth + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default tollBoothsMutations;