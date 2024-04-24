import { unitStatus } from "../../../db/Entities/unitStatus";

const unitStatusQueries = {
    GET_UNIT_STATUS: async (_: any) => {
        try{
            const result = await unitStatus.query("exec get_all_unit_status");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default unitStatusQueries;