import { clientUsers } from "../../../db/Entities/clientUsers";

const clientUsersQueries = {
    GET_CLIENTUSERS_BY_IDCLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await clientUsers.query("exec get_clientUsers_by_idClient @idClient = '"+ idClient +"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_CLIENTUSERS_LOGIN: async (_: any, {user, password}: any) => {
        try{
            const result = await clientUsers.query("exec get_clientUsers_login @user = '" + user + "', @password = '"+password+"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENTUSERS_BY_ID: async (_: any, {idClientUser}: any) => {
        try{
            const result = await clientUsers.query("exec get_clientUser_by_id @idClientUser = '"+ idClientUser +"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENTUSER_BY_IDCLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await clientUsers.query("exec get_clientUser_by_idClient @idClient = '"+ idClient +"', @encrypt = '"+process.env.ENCRYPT+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default clientUsersQueries;