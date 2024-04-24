import { unitDocuments } from "../../../db/Entities/unitDocuments";

const unitDocumentsQueries = {
    GET_ALL_UNIT_DOCUMENTS: async (_: any, {status}: any) => {
        try{
            const result = await unitDocuments.query("exec get_all_unit_documents @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default unitDocumentsQueries;