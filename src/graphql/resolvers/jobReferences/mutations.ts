import { jobReferences } from "../../../db/Entities/jobReferences";

const jobReferencesMutation = {
    SET_JOBREFERENCES: async (_: any, {input}: any) => {
        const {idCandidates, jobReferences: jobReferencesText, comments, userLoggedIn, correctlyCompleted, name} = input;
        try {
            const newData = await jobReferences.query("exec set_jobReferences @idCandidates = '"+idCandidates+"', @jobReferences = '"+jobReferencesText+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"', @name = '"+name+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }
    },
    SET_JOBREFERENCES_DOCUMENTS: async (_: any, {input}: any) => {
        const { idJobReferences, link, userLoggedIn } = input;
        try {
            await jobReferences.query("exec set_document_jobReferences @idJobReferences = '"+idJobReferences+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
};

export default jobReferencesMutation;
