import {c_ClaveUnidad} from "../../../db/Entities/c_ClaveUnidad";

const c_ClaveUnidadQueries = {
    GET_C_CLAVEUNIDAD: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_ClaveUnidad.query("exec get_all_c_ClaveUnidad @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_ClaveUnidadQueries;