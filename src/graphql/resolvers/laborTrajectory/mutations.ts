import { laborTrajectory } from "../../../db/Entities/laborTrajectory";

const laborTrajectoryMutation = {
    SET_LABOR_TRAJECTORY: async (_: any, {input}: any) => {
        const {idCandidates, laborTrajectory: laborTrajectoryText, comments, userLoggedIn, correctlyCompleted} = input;
        try {
            await laborTrajectory.query("exec set_laborTrajectory @idCandidates = '"+idCandidates+"', @laborTrajectory = '"+laborTrajectoryText+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"' ");
            return 'Registro guardado correctamente'
        } catch (error) {
            console.log(error);
        }
    },

};

export default laborTrajectoryMutation;
