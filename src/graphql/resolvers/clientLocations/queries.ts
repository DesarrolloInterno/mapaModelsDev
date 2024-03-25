import { clientLocations } from "../../../db/Entities/clientLocations";

const clientLocationsQueries = {

    GET_CLIENT_LOCATION: async (_: any, {status, idClient}: any) => {
        try{
            const result = await clientLocations.query("exec get_all_clientLocations @status = '"+ status +"', @idClient = '"+ idClient +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_LIST_CLIENT_LOCATION: async (_: any, {status}: any) => {
        try{
            const result = await clientLocations.query("exec get_list_clientLocations @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default clientLocationsQueries;