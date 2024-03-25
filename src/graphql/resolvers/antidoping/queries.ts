import { antidoping } from "../../../db/Entities/antidoping";

const antidopingQuery = {
    GET_ANTIDOPINGBYCANDIDATE: async (_: any, {idCandidates}: any) => {
        try{
            const result = await antidoping.query("exec get_antidopingByCandidates @idCandidates = '"+ idCandidates +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANDIDATE_ANTIDOPING: async (_: any, {idAntidoping}: any) => {
        try{
            const result = await antidoping.query("exec get_candidates_antidoping @idAntidoping = '"+ idAntidoping +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default antidopingQuery;