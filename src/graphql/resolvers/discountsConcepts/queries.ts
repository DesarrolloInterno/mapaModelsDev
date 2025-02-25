import { discountsConcepts } from "../../../db/Entities/discountsConcepts";

const discountsConceptsQueries = {
    GET_ALL_DISCOUNTS_CONCEPTS: async (_: any, {idEnterprise, status}: any) => {
        try{
            const result = await discountsConcepts.query("exec get_all_discountsConcepts @idEnterprise = '"+ idEnterprise +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default discountsConceptsQueries;