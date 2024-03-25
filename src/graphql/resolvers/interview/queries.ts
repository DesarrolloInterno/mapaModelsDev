import { interview } from "../../../db/Entities/interview";

const interviewQuery = {
    GET_INTERVIEWBYCANDIDATE: async (_: any, {idCandidates}: any) => {
        try{
            const result = await interview.query("exec get_interviewByCandidates @idCandidates = '"+ idCandidates +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANDIDATE_INTERVIEW: async (_: any, {idInterview}: any) => {
        try{
            const result = await interview.query("exec get_Candidates_Interview @idInterview = '"+ idInterview +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default interviewQuery;