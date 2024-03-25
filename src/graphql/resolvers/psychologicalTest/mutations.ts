import { psychologicalTest } from "../../../db/Entities/psychologicalTest";

const psychologicalTestMutations = {
    SET_PSYCHOLOGICALTEST: async (_: any, {input}: any) => {
        const {idCandidates, comments, userLoggedIn, correctlyCompleted} = input;
        try {
            const newData = await psychologicalTest.query("exec set_psychologicalTest @idCandidates = '"+idCandidates+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }
    },
    SET_PSYCHOLOGICALTEST_DOCUMENTS: async (_: any, {input}: any) => {
        const { idPsychologicalTest, link, userLoggedIn } = input;
        try {
            await psychologicalTest.query("exec set_document_psychologicalTest @idPsychologicalTest = '"+idPsychologicalTest+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
};

export default psychologicalTestMutations;