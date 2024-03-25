import { startingMeetingDocuments } from "../../../db/Entities/startingMeetingDocuments";

const startingMeetingDocumentsQueries = {

    GET_STARTING_MEETING_DOCUMENTS_BY_ID_STARTING_MEETING: async (_: any, {idStartingMeeting}: any) => {
        try{
            const result = await startingMeetingDocuments.query("exec get_startingMeetingDocuments_by_idStartingMeeting @idStartingMeeting = '"+ idStartingMeeting +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default startingMeetingDocumentsQueries;