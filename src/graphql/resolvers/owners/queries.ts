import { owners } from "../../../db/Entities/owners";

const ownersQueries = {
    GET_OWNERS: async (_: any, {status}: any) => {
        try{
            const result = await owners.query("exec get_all_owners @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default ownersQueries;