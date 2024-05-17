import { c_SubTipoRem } from "../../../db/Entities/c_SubTipoRem";

const c_SubTipoRemQueries = {
    GET_ALL_C_SUBTIPOREM: async (_: any, { filter, filterDesc, status}: any) => {
        try{
            const result = await c_SubTipoRem.query("exec get_all_c_SubTipoRem @filter = '"+ filter +"', @filterDesc = '"+ filterDesc +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default c_SubTipoRemQueries;