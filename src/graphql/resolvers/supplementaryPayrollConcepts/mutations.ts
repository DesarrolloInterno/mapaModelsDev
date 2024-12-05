import { supplementaryPayrollConcepts } from "../../../db/Entities/supplementaryPayrollConcepts";

const supplementaryPayrollConceptsMutations = {
    CREATE_SUPPLEMENTARY_PAYROLL_CONCEPT: async (_: any, {input}: any) => {
        const { 
            name,
            description,
            userLoggedIn,
            idEnterprise,
        } = input;
        try {
            const newRecord = await supplementaryPayrollConcepts.query("exec create_supplementary_payroll_concepts " +
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
    UPDATE_SUPPLEMENTARY_PAYROLL_CONCEPT: async (_: any, {input}: any) => {
        const {
            idSupplementaryPayrollConcept,
            name,
            description,
            userLoggedIn,
            idEnterprise,
        } = input;
        try {
            const newRecord = await supplementaryPayrollConcepts.query("exec update_supplementary_payroll_concepts " +
                "@idSupplementaryPayrollConcept = '" + idSupplementaryPayrollConcept + "', " +
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
    DELETE_SUPPLEMENTARY_PAYROLL_CONCEPT: async (_: any, {input}: any) => {
        const {
            idSupplementaryPayrollConcept,
            userLoggedIn
        } = input;
        try {
            const newRecord = await supplementaryPayrollConcepts.query("exec delete_supplementary_payroll_concepts " +
                "@idSupplementaryPayrollConcept = '" + idSupplementaryPayrollConcept + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default supplementaryPayrollConceptsMutations;