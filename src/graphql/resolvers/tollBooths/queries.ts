import { tollBooths } from "../../../db/Entities/tollBooths";

const tollBoothsQueries = {

    GET_TOLLBOOTHS: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await tollBooths.query("exec get_all_tollBooths @status = '"+ status +"', @idEnterprise = '"+ idEnterprise + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_LIST_TOLLBOOTHS: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await tollBooths.query("exec get_list_tollBooths @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tollBoothsQueries;