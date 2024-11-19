import { potentialClient } from "../../../db/Entities/potentialClient";

const potentialClientQueries = {

    GET_ALL_POTENTIAL_CLIENT: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await potentialClient.query("exec get_all_potentialClient @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_POTENTIAL_CLIENT_BY_ID: async (_: any, {idPotentialClient}: any) => {
        try{
            const result = await potentialClient.query("exec get_potentialClient_by_id @idPotentialClient = '"+ idPotentialClient +"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_USER_POTENTIAL_CLIENT_LOGIN: async (_: any, {user, password}: any) => {
        try{
            const result = await potentialClient.query("exec get_potentialClient_login @user = '" + user + "', @password = '"+password+"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_POTENTIAL_CLIENT_FORM_BY_ID: async (_: any, {idPotentialClient}: any) => {
        try{
            const result = await potentialClient.query("exec get_potentialClient_form_by_id @idPotentialClient = '"+ idPotentialClient +"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_POTENTIAL_CLIENT_FORM_BY_ID_CLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await potentialClient.query("exec get_potentialClient_form_by_idClient @idClient = '"+ idClient +"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default potentialClientQueries;