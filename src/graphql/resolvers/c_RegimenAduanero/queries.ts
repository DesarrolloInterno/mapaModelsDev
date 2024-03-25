import {c_RegimenAduanero} from "../../../db/Entities/c_RegimenAduanero";

const c_RegimenAduaneroQueries = {
    GET_ALL_C_REGIMEN_ADUANERO: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_RegimenAduanero.query("exec get_all_c_RegimenAduanero @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_RegimenAduaneroQueries;