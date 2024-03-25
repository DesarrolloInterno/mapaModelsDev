import { boardMembersMeeting } from "../../../db/Entities/boardMembersMeeting";

const boardMembersMeetingQueries = {

    GET_BOARD_MEMBERS_MEETING_BY_ID_STARTING_MEETING: async (_: any, {idStartingMeeting}: any) => {
        try{
            const result = await boardMembersMeeting.query("exec get_boardMembersMeeting_by_idStartingMeeting @idStartingMeeting = '"+ idStartingMeeting +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default boardMembersMeetingQueries;