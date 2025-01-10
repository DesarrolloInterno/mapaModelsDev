import { truckBoxMovementHistory } from "../../../db/Entities/truckBoxMovementHistory";

const truckBoxMovementHistoryQueries = {
    GET_ALL_TRUCKBOX_MOVEMENTS: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await truckBoxMovementHistory.query("exec get_all_truckBoxMovements @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxMovementHistoryQueries;