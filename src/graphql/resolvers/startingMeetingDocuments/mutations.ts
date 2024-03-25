import { startingMeetingDocuments } from "../../../db/Entities/startingMeetingDocuments";

const startingMeetingDocumentsMutations = {

    CREATE_STARTING_MEETING_DOCUMENTS: async (_: any, {input}: any) => {
        const { idStartingMeeting, nameDocument } = input;
        try {
            const newRecord = await startingMeetingDocuments.query("exec set_startingMeetingDocuments @idStartingMeeting = '"+idStartingMeeting+"', @nameDocument = '"+nameDocument+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_STARTING_MEETING_DOCUMENTS: async (_: any, {input}: any) => {
        const { idStartingMeetingDocuments, link } = input;
        try {
            await startingMeetingDocuments.query("exec set_link_document_startingMeetingDocuments @idStartingMeetingDocuments = '"+idStartingMeetingDocuments+"', @link = '"+link+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_STARTING_MEETING_DOCUMENTS: async (_: any, {input}: any) => {
        const { idStartingMeetingDocuments, userLoggedIn } = input;
        try {
            const result = await startingMeetingDocuments.query("exec delete_startingMeetingDocuments @idStartingMeetingDocuments = '"+idStartingMeetingDocuments+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return result[0].lastLink
        } catch (error) {
            console.log(error);
        }
    },
};

export default startingMeetingDocumentsMutations;