import { clientLocations } from "../../../db/Entities/clientLocations";

const clientLocationsQueries = {

    GET_CLIENT_LOCATION: async (_: any, {status, idClient, idEnterprise}: any) => {
        try{
            const result = await clientLocations.query("exec get_all_clientLocations @status = '"+ status +"', @idClient = '"+ idClient +"', @idEnterprise = '"+ idEnterprise + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_LIST_CLIENT_LOCATION: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await clientLocations.query("exec get_list_clientLocations @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default clientLocationsQueries;