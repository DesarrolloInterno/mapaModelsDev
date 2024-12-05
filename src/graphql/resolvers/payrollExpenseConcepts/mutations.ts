import { payrollExpenseConcepts } from "../../../db/Entities/payrollExpenseConcepts";

const payrollExpenseConceptsMutations = {
    CREATE_PAYROLL_EXPENSE_CONCEPT: async (_: any, {input}: any) => {
        const { 
            name,
            description,
            userLoggedIn,
            idEnterprise,
        } = input;
        try {
            const newRecord = await payrollExpenseConcepts.query("exec create_payroll_expense_concepts " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_PAYROLL_EXPENSE_CONCEPT: async (_: any, {input}: any) => {
        const {
            idPayrollExpenseConcept,
            name,
            description,
            userLoggedIn,
            idEnterprise,
        } = input;
        try {
            const newRecord = await payrollExpenseConcepts.query("exec update_payroll_expense_concepts " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_PAYROLL_EXPENSE_CONCEPT: async (_: any, {input}: any) => {
        const {
            idPayrollExpenseConcept,
            userLoggedIn
        } = input;
        try {
            const newRecord = await payrollExpenseConcepts.query("exec delete_payroll_expense_concepts " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default payrollExpenseConceptsMutations;