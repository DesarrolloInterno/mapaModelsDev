import { invoicingConcept } from "../../../db/Entities/invoicingConcept";

const invoicingConceptQueries = {

    GET_INVOICINGCONCEPT: async (_: any, {status}: any) => {
        try{
            const result = await invoicingConcept.query("exec get_all_invoicingConcept @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default invoicingConceptQueries;