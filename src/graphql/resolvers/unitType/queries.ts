import { unitType } from "../../../db/Entities/unitType";

const unitTypeQueries = {
    GET_UNIT_TYPE: async (_: any) => {
        try{
            const result = await unitType.query("exec get_all_unit_type");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default unitTypeQueries;