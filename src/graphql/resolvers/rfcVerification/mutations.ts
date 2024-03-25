import { rfcVerification } from "../../../db/Entities/rfcVerification";

const rfcVerificationMutation = {
    SET_RFCVERIFICATION: async (_: any, {input}: any) => {
        const {idCandidates, comments, userLoggedIn, correctlyCompleted, RFC} = input;
        try {
            const newData = await rfcVerification.query("exec set_rfcVerification @idCandidates = '"+idCandidates+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"', @RFC = '"+RFC+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }
    },
    SET_RFCVERIFICATION_DOCUMENTS: async (_: any, {input}: any) => {
        const { idRfcVerification, link, userLoggedIn } = input;
        try {
            await rfcVerification.query("exec set_document_rfcVerification @idRfcVerification = '"+idRfcVerification+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    
};

export default rfcVerificationMutation;