import {c_ClaveUnidadInvoicing} from "../../../db/Entities/c_ClaveUnidadInvoicing";

const c_ClaveUnidadInvoicingQueries = {

    GET_C_CLAVEUNIDADINVOICING: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_ClaveUnidadInvoicing.query("exec get_all_c_ClaveUnidadInvoicing @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_ClaveUnidadInvoicingQueries;