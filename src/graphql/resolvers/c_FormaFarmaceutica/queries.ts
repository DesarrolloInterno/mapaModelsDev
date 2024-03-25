import {c_FormaFarmaceutica} from "../../../db/Entities/c_FormaFarmaceutica";

const c_FormaFarmaceuticaQueries = {

    GET_ALL_C_FORMAFARMACEUTICA: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_FormaFarmaceutica.query("exec get_all_c_FormaFarmaceutica @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_FormaFarmaceuticaQueries;