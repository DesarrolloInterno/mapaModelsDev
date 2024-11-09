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

};

export default invoicingConceptQueries;