import { warehouses } from "../../../db/Entities/warehouses";

const warehousesQueries = {
    GET_WAREHOUSES: async (_: any, {status}: any) => {
        try{
            const result = await warehouses.query("exec get_all_warehouses @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default warehousesQueries;