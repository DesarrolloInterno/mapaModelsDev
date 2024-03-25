import { typeLicense } from "../../../db/Entities/typeLicense";

const typeLicenseQueries = {

    GET_ALL_TYPE_LICENSE: async (_: any, {}: any) => {
        try{
            const result = await typeLicense.query("exec get_all_typeLicense ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default typeLicenseQueries;