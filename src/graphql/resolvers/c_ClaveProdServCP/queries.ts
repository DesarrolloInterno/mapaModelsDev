import { c_ClaveProdServCP } from "../../../db/Entities/c_ClaveProdServCP";

const c_ClaveProdServCPQueries = {
    GET_C_CLAVEPRODSERVCP: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_ClaveProdServCP.query("exec get_all_c_ClaveProdServCP @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default c_ClaveProdServCPQueries;