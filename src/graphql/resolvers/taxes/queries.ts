import { taxes } from "../../../db/Entities/taxes";

const taxesQueries = {
    GET_TAXES: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await taxes.query("exec get_all_taxes @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TAXRATE_INVOICINGCONCEPT: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await taxes.query("exec get_taxRate_invoicingConcept @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default taxesQueries;