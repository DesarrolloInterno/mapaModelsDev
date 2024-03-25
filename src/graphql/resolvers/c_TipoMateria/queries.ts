import {c_TipoMateria} from "../../../db/Entities/c_TipoMateria";

const c_TipoMateriaQueries = {

    GET_ALL_C_TIPO_MATERIA: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_TipoMateria.query("exec get_all_c_TipoMateria @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_TipoMateriaQueries;