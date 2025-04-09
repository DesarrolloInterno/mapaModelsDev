import {c_TipoRelacion} from "../../../db/Entities/c_TipoRelacion";

const c_TipoRelacionQueries = {

    GET_ALL_C_TIPO_RELACION: async (_: any) => {
        try{
            const result = await c_TipoRelacion.query("exec get_all_c_TipoRelacion ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_TipoRelacionQueries;