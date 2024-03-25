import { rfcVerification } from "../../../db/Entities/rfcVerification";

const rfcVerificationQuery = {

    GET_RFCVERIFICATION: async (_: any, {idCandidate}: any) => {
        try{
            const result = await rfcVerification.query("exec get_rfcVerificationByCandidate @idCandidate = '"+ idCandidate +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }   
    },
    GET_NAME_RFCVERIFICATION: async (_: any, {idCandidate}: any) => {
        try{
            const result = await rfcVerification.query("exec get_name_rfcVerificationByCandidate @idCandidate = '"+ idCandidate +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default rfcVerificationQuery;