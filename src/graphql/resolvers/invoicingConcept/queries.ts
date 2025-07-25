import { invoicingConcept } from "../../../db/Entities/invoicingConcept";

const invoicingConceptQueries = {

    GET_INVOICINGCONCEPT: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await invoicingConcept.query("exec get_all_invoicingConcept @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICINGCONCEPT2: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await invoicingConcept.query("exec get_all_invoicingConcept2 @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICINGCONCEPTS_ISNOT_OTHERINCOME: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await invoicingConcept.query("exec get_all_invoicingConcepts_isNot_otherIncome @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default invoicingConceptQueries;