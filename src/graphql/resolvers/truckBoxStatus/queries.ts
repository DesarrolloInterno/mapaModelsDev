import { truckBoxStatus } from "../../../db/Entities/truckBoxStatus";

const truckBoxStatusQueries = {
    GET_TRUCKBOXSTATUS: async (_: any) => {
        try{
            const result = await truckBoxStatus.query("exec get_all_truckBoxStatus");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxStatusQueries;