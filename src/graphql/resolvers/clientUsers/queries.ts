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

};

export default clientUsersQueries;