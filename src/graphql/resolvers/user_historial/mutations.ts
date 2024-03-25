import {user_historial} from "../../../db/Entities/user_historial";

const user_historialMutations = {
    CREATE_USER_HISTORIAL: async (_: any, {input}: any) => {
        const {idUser, event, access_point, userRecorded} = input;
        try {
            const result = await user_historial.query("exec create_user_historial @idUser = " + idUser + ", @event = '" + event + "', @access_point = '" + access_point + "', @userRecorded = '" + userRecorded + "'");
            return result[0].event;
        } catch (error) {
            console.log(error);
        }
    }

};

export default user_historialMutations;