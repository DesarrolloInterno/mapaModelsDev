import { truckBoxType } from "../../../db/Entities/truckBoxType";

const truckBoxTypeQueries = {
    GET_TRUCKBOXTYPE: async (_: any) => {
        try{
            const result = await truckBoxType.query("exec get_all_truckBoxType");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxTypeQueries;