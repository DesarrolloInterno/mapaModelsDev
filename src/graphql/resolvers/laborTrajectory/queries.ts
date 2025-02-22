import { laborTrajectory } from "../../../db/Entities/laborTrajectory";

const laborTrajectoryQuery = {
    GET_LABORTRAJECTORYBYCANDIDATE: async (_: any, {idCandidates}: any) => {
        try{
            const result = await laborTrajectory.query("exec get_laborTrajectoryByCandidates @idCandidates = '"+ idCandidates +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANDIDATE_LABORTRAJECTORY: async (_: any, {idLaborTrajectory}: any) => {
        try{
            const result = await laborTrajectory.query("exec get_candidates_laborTrajectory @idLaborTrajectory = '"+ idLaborTrajectory +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default laborTrajectoryQuery;