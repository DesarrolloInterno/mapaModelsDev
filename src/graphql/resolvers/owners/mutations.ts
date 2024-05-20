import { owners } from "../../../db/Entities/owners";

const ownersMutations = {

    CREATE_OWNER: async (_: any, {input}: any) => {
        const {
			name,
            observations,
            permitHolder,
	        userLoggedIn
        } = input;

        try {
            const newRecord = await owners.query("exec create_owner " +
                "@name = '" + name + "', " +
                "@observations = '" + observations + "', " +
                "@permitHolder = '" + permitHolder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_OWNER: async (_: any, {input}: any) => {
        const {
            idOwner,
			name,
            observations,
            permitHolder,
            userLoggedIn
        } = input;

        try {
            const newRecord = await owners.query("exec update_owner " +
                "@idOwner = '" + idOwner + "', " +
                "@name = '" + name + "', " +
                "@observations = '" + observations + "', " +
                "@permitHolder = '" + permitHolder + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_OWNER: async (_: any, {input}: any) => {
        const {
            idOwner,
            userLoggedIn
        } = input;

        try {
            await owners.query("exec delete_owner " +
                "@idOwner = '" + idOwner + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    }
};

export default ownersMutations;