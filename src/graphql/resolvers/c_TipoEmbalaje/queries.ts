import { c_TipoEmbalaje } from "../../../db/Entities/c_TipoEmbalaje";

const c_TipoEmbalajeQueries = {
    GET_C_TIPOEMBALAJE: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_TipoEmbalaje.query("exec get_all_c_TipoEmbalaje @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default c_TipoEmbalajeQueries;