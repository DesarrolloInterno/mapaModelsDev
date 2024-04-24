import { operativeClasification } from "../../../db/Entities/operativeClasification";

const operativeClasificationQueries = {
    GET_OPERATIVE_CLASIFICATION: async (_: any) => {
        try{
            const result = await operativeClasification.query("exec get_all_operative_clasification");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default operativeClasificationQueries;