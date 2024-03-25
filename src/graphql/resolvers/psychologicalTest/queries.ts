import { psychologicalTest } from "../../../db/Entities/psychologicalTest";

const psychologicalTestQuery = {
    GET_PSYCHOLOGICALTESTBYCANDIDATE: async (_: any, {idCandidates}: any) => {
        try{
            const result = await psychologicalTest.query("exec get_psychologicalTestByCandidates @idCandidates = '"+ idCandidates +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANDIDATE_PSYCHOLOGICALTEST: async (_: any, {idPsychologicalTest}: any) => {
        try{
            const result = await psychologicalTest.query("exec get_candidates_psychologicalTest @idPsychologicalTest = '"+ idPsychologicalTest +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default psychologicalTestQuery;