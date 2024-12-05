import { supplementaryPayrollConcepts } from "../../../db/Entities/supplementaryPayrollConcepts";

const supplementaryPayrollConceptsQueries = {
    GET_ALL_SUPPLEMENTARY_PAYROLL_CONCEPTS: async (_: any, {idEnterprise, status}: any) => {
        try{
            const result = await supplementaryPayrollConcepts.query("exec get_all_supplementaryPayrollConcepts @idEnterprise = '"+ idEnterprise +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default supplementaryPayrollConceptsQueries;