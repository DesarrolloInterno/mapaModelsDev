import { c_MaterialPeligroso } from "../../../db/Entities/c_MaterialPeligroso";

const c_MaterialPeligrosoQueries = {
    GEL_C_MATERIALPELIGROSO: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_MaterialPeligroso.query("exec get_all_c_MaterialPeligroso @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default c_MaterialPeligrosoQueries;