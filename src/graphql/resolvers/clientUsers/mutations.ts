import { clientUsers } from "../../../db/Entities/clientUsers";

const clientUserMutations = {
    SET_CLIENTUSER: async (_: any, {input}: any) => {
        const { 
            idClientUsers,
            userName,
            companyArea,
            description,
            password,
            idClient,
            userLoggedIn,
            typeUser,
            status
        } = input;
        try {
            const result = await clientUsers.query("exec set_clientUsers " +
            "@idClientUsers = '"+ idClientUsers +"', " +
            "@userName = '"+ userName +"', " +
            "@companyArea = '"+ companyArea +"', " +
            "@description = '"+ description +"', " +
            "@password = '"+ password +"', " +
            "@encrypt = '"+process.env.ENCRYPT+"', " +
            "@idClient = '"+ idClient +"', " +
            "@userLoggedIn = '"+ userLoggedIn +"', " +
            "@typeUser = '"+ typeUser +"', " +
            "@status = '"+ status +"' ");

            return result
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_CLIENTUSER: async (_: any, {input}: any) => {
        const { 
            idClientUsers,
            userLoggedIn
        } = input;
        try {
            await clientUsers.query("exec delete_clientUsers " +
            "@idClientUsers = '"+ idClientUsers +"', " +
            "@userLoggedIn = '"+ userLoggedIn +"' " );

            return "Usario eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
};

export default clientUserMutations;