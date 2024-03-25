import { useOfCFDI } from "../../../db/Entities/useOfCFDI";

const useOfCFDIQueries = {

    GET_ALL_USE_OF_CFDI: async (_: any, {}: any) => {
        try{
            const result = await useOfCFDI.query("exec get_all_useOfCFDI ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default useOfCFDIQueries;