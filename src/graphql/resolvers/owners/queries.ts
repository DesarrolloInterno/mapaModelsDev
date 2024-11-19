import { owners } from "../../../db/Entities/owners";

const ownersQueries = {
    GET_OWNERS: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await owners.query("exec get_all_owners @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default ownersQueries;