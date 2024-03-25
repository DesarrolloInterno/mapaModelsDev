import { tollBooths } from "../../../db/Entities/tollBooths";

const tollBoothsQueries = {

    GET_TOLLBOOTHS: async (_: any, {status}: any) => {
        try{
            const result = await tollBooths.query("exec get_all_tollBooths @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_LIST_TOLLBOOTHS: async (_: any, {status}: any) => {
        try{
            const result = await tollBooths.query("exec get_list_tollBooths @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tollBoothsQueries;