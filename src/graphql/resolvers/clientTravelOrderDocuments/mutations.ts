import { clientTravelOrderDocuments } from "../../../db/Entities/clientTravelOrderDocuments";

const clientTravelOrderDocumentsMutations = {

    CREATE_CLIENTTRAVELORDER_DOCUMENTS: async (_: any, {input}: any) => {
        const {
            name,
            idClientTravelOrder,
            userLoggedIn
        } = input;

        try {
            const newRecord = await clientTravelOrderDocuments.query("exec create_clientTravelOrderDocuments " +
            "@idClientTravelOrder = '"+idClientTravelOrder+"', " +
            "@name = '"+name+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENTTRAVELORDER_DOCUMENTS: async (_: any, {input}: any) => {
        const {
            idClientTravelOrderDocument,
			name,
            userLoggedIn
        } = input;

        try {
            const newRecord = await clientTravelOrderDocuments.query("exec update_clientTravelOrderDocument " +
                "@idClientTravelOrderDocument = '" + idClientTravelOrderDocument + "', " +
                "@name = '" + name + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_CLIENTTRAVELORDER_DOCUMENTS: async (_: any, {input}: any) => {
        const {
            idClientTravelOrderDocument,
            userLoggedIn
        } = input;

        try {
            await clientTravelOrderDocuments.query("exec delete_clientTravelOrderDocument " +
                "@idClientTravelOrderDocument = '" + idClientTravelOrderDocument + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    }
};

export default clientTravelOrderDocumentsMutations;