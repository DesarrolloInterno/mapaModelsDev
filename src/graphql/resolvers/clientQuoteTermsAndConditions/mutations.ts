import { clientQuoteTermsAndConditions } from "../../../db/Entities/clientQuoteTermsAndConditions";

const clientQuoteTermsAndConditionsMutations = {
    SET_GENERAL_TERMS_AND_CONDITIONS: async (_: any, {input}: any) => {
        const { 
            idGeneralTermsAndConditions,
            termsAndConditions,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            await clientQuoteTermsAndConditions.query("exec set_generalTermsAndConditions @idGeneralTermsAndConditions = '"+idGeneralTermsAndConditions+"', @termsAndConditions = '"+termsAndConditions+"', @userLoggedIn = '"+userLoggedIn+"', @idEnterprise = '"+ idEnterprise +"'");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
};

export default clientQuoteTermsAndConditionsMutations;