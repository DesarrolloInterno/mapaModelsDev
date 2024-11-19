import { startingMeeting } from "../../../db/Entities/startingMeeting";

const startingMeetingQueries = {
    GET_ALL_STARTING_MEETING: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await startingMeeting.query("exec get_all_startingMeeting @status = '"+ status +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_STARTING_MEETING_BY_ID: async (_: any, {idStartingMeeting, idEnterprise}: any) => {
        try{
            const result = await startingMeeting.query("exec get_startingMeeting_by_id @idStartingMeeting = '"+ idStartingMeeting +"', @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default startingMeetingQueries;