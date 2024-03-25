import { jobReferences } from "../../../db/Entities/jobReferences";

const jobReferencesQuery = {

    GET_JOBREFERENCESBYCANDIDATE: async (_: any, {idCandidates}: any) => {
        try{
            const result = await jobReferences.query("exec get_jobReferencesByCandidates @idCandidates = '"+ idCandidates +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANDIDATE_JOBREFERENCES: async (_: any, {idJobReferences}: any) => {
        try{
            const result = await jobReferences.query("exec get_candidates_jobReferences @idJobReferences = '"+ idJobReferences +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default jobReferencesQuery;