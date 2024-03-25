import { interview } from "../../../db/Entities/interview";

const interviewMutation = {
    SET_INTERVIEW: async (_: any, {input}: any) => {
        const {idCandidates, comments, userLoggedIn, correctlyCompleted} = input;
        try {
            const newData = await interview.query("exec set_interview @idCandidates = '"+idCandidates+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }
    },
    SET_INTERVIEW_DOCUMENTS: async (_: any, {input}: any) => {
        const { idInterview, link, userLoggedIn } = input;
        try {
            await interview.query("exec set_document_interview @idInterview = '"+idInterview+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
};

export default interviewMutation;