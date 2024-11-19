import { warehouses } from "../../../db/Entities/warehouses";

const warehousesQueries = {
    GET_WAREHOUSES: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await warehouses.query("exec get_all_warehouses @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default warehousesQueries;