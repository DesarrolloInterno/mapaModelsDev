import {user_historial} from "../../../db/Entities/user_historial";

const user_historialQueries = {
    GET_USER_HISTORIAL_FOR_USER: async (_: any, {idUser,showAccess}: any) => {
        try {
            const result = await user_historial.query("exec get_user_historial_for_user @idUser = " + idUser + ", @showAccess = '" + showAccess + "' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
}

export default user_historialQueries;