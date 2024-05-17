import {c_ConfigAutotransporte} from "../../../db/Entities/c_ConfigAutotransporte";

const c_ConfigAutotransporteQueries = {

    GET_ALL_C_CONFIG_AUTOTRANSPORTE: async (_: any, {filter, filterDesc, status}: any) => {
        try{
            const result = await c_ConfigAutotransporte.query("exec get_all_c_ConfigAutotransporte @filter = '"+ filter +"', @filterDesc = '"+ filterDesc + "', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_ConfigAutotransporteQueries;