import { typeBlood } from "../../../db/Entities/typeBlood";

const typeBloodQueries = {
    GET_ALL_TYPE_BLOOD: async (_: any, {}: any) => {
        try{
            const result = await typeBlood.query("exec get_all_typeBlood ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default typeBloodQueries;