import { client } from "../../../db/Entities/client";

const clientQueries = {
    GET_ALL_CLIENT: async (_: any, {status}: any) => {
        try{
            const result = await client.query("exec get_all_clients @status = '"+ status +"', @encrypt = '" + process.env.ENCRYPT + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_BYID: async (_: any, {idClient}: any) => {
        try{
            const result = await client.query("exec get_clients_byid @idClient = '"+ idClient +"', @encrypt = '" + process.env.ENCRYPT + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_CLIENTS_LIST: async (_: any, {status}: any) => {
        try{
            const result = await client.query("exec get_all_clients_list @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_CLIENTS_TABLE_SELECTOR: async (_: any, {status}: any) => {
        try{
            const result = await client.query("exec get_all_clients_table_selector @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_USERS_BY_POTENTIAL_CLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await client.query("exec get_clientUsersByPotentialClient @idClient = '"+ idClient +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default clientQueries;