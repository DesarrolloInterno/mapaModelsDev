import { workerReferences } from "../../../db/Entities/workerReferences";

const workerReferencesQueries = {
    GET_ALL_WORKER_REFERENCES_BY_ID: async (_: any, {idEmployee}: any) => {
        try{
            const result = await workerReferences.query("exec get_worker_references_by_id @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    }
};

export default workerReferencesQueries;