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
};

export default laborTrajectoryQuery;