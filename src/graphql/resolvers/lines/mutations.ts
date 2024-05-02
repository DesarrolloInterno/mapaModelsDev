import { lines } from "../../../db/Entities/lines";

const linesMutations = {

    CREATE_LINE: async (_: any, {input}: any) => {
        const {
			name,
            description,
	        userLoggedIn
        } = input;

        try {
            const newRecord = await lines.query("exec create_line " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_LINE: async (_: any, {input}: any) => {
        const {
            idLine,
			name,
            description,
            userLoggedIn
        } = input;

        try {
            const newRecord = await lines.query("exec update_line " +
                "@idLine = '" + idLine + "', " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_LINE: async (_: any, {input}: any) => {
        const {
            idLine,
            userLoggedIn
        } = input;

        try {
            await lines.query("exec delete_line " +
                "@idLine = '" + idLine + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default linesMutations;