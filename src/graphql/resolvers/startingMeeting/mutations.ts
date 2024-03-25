import { startingMeeting } from "../../../db/Entities/startingMeeting";

const startingMeetingMutations = {
    CREATE_STARTING_MEETING: async (_: any, {input}: any) => {
        const { idClient, dateMeeting, name, location, userLoggedIn  } = input;
        try {
            const newRecord = await startingMeeting.query("exec create_startingMeeting @idClient = '"+idClient+"', @dateMeeting = '"+dateMeeting+"', @name = '"+name+"', @location = '"+location+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_STARTING_MEETING: async (_: any, {input}: any) => {
        const { idStartingMeeting, idClient, dateMeeting, name, location, userLoggedIn  } = input;
        try {
            await startingMeeting.query("exec update_startingMeeting @idStartingMeeting = '"+idStartingMeeting+"', @idClient = '"+idClient+"', @dateMeeting = '"+dateMeeting+"', @name = '"+name+"', @location = '"+location+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_STARTING_MEETING: async (_: any, {input}: any) => {
        const { idStartingMeeting, userLoggedIn  } = input;
        try {
            await startingMeeting.query("exec delete_startingMeeting @idStartingMeeting = '"+idStartingMeeting+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default startingMeetingMutations;