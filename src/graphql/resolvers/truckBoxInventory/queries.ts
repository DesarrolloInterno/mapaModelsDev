import { truckBoxInventory } from "../../../db/Entities/truckBoxInventory";

const truckBoxInventoryQueries = {
    GET_TRUCKBOXINVENTORY: async (_: any, {warehouse, idEnterprise}: any) => {
        try{
            const result = await truckBoxInventory.query("exec get_all_truckBoxInventory @warehouse = '"+ warehouse +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxInventoryQueries;