import {c_DocumentoAduanero} from "../../../db/Entities/c_DocumentoAduanero";

const c_DocumentoAduaneroQueries = {
    GET_ALL_C_DOCUMENTOADUANERO: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_DocumentoAduanero.query("exec get_all_c_DocumentoAduanero @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_DocumentoAduaneroQueries;