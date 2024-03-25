import { boothRoutes } from "../../../db/Entities/boothRoutes";

const boothRoutesQueries = {
    GET_BOOTHROUTES: async (_: any, {status}: any) => {
        try{
            const result = await boothRoutes.query("exec get_all_boothRoutes @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_BOOTHROUTES_LIST: async (_: any, {status}: any) => {
        try{
            const result = await boothRoutes.query("exec get_list_boothRoutes @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default boothRoutesQueries;