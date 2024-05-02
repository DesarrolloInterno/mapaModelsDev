import { truckBoxLocation } from "../../../db/Entities/truckBoxLocation";

const truckBoxLocationQueries = {
    GET_TRUCKBOXLOCATION: async (_: any) => {
        try{
            const result = await truckBoxLocation.query("exec get_all_truckBoxLocation");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default truckBoxLocationQueries;