import { payrollExpenseConcepts } from "../../../db/Entities/payrollExpenseConcepts";

const payrollExpenseConceptsQueries = {
    GET_ALL_PAYROLL_EXPENSE_CONCEPTS: async (_: any, {idEnterprise, status}: any) => {
        try{
            const result = await payrollExpenseConcepts.query("exec get_all_payrollExpenseConcepts @idEnterprise = '"+ idEnterprise +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default payrollExpenseConceptsQueries;