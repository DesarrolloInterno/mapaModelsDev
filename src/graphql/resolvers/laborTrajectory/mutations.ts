import { laborTrajectory } from "../../../db/Entities/laborTrajectory";

const laborTrajectoryMutation = {
    SET_LABOR_TRAJECTORY: async (_: any, {input}: any) => {
        const {idCandidates, laborTrajectory: laborTrajectoryText, comments, userLoggedIn, correctlyCompleted} = input;
        try {
            const newRecord = await laborTrajectory.query("exec set_laborTrajectory @idCandidates = '"+idCandidates+"', @laborTrajectory = '"+laborTrajectoryText+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LABORTRAJECTORY_DOCUMENTS: async (_: any, {input}: any) => {
        const { idLaborTrajectory, link, userLoggedIn } = input;
        try {
            await laborTrajectory.query("exec set_document_laborTrajectory @idLaborTrajectory = '"+idLaborTrajectory+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default laborTrajectoryMutation;
