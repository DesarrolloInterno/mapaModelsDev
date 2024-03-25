import {c_CondicionesEspeciales} from "../../../db/Entities/c_CondicionesEspeciales";

const c_CondicionesEspecialesQueries = {

    GET_ALL_C_CONDICIONESESPECIALES: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_CondicionesEspeciales.query("exec get_all_c_CondicionesEspeciales @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_CondicionesEspecialesQueries;