import { truckBoxes } from "../../../db/Entities/truckBoxes";

const truckBoxesQueries = {
    GET_TRUCKBOXES: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await truckBoxes.query("exec get_all_truckBoxes @status = '"+ status +"', @idEnterprise ='"+ idEnterprise + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxesQueries;