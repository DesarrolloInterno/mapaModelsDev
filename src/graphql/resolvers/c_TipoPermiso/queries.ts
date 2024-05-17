import {c_TipoPermiso} from "../../../db/Entities/c_TipoPermiso";

const c_TipoPermisoQueries = {

    GET_ALL_C_TIPO_PERMISO: async (_: any, { filter, filterDesc, status}: any) => {
        try{
            const result = await c_TipoPermiso.query("exec get_all_c_TipoPermiso @filter = '"+ filter +"', @filterDesc = '"+ filterDesc +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_TipoPermisoQueries;