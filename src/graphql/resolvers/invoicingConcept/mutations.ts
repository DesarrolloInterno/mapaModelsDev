import { invoicingConcept } from "../../../db/Entities/invoicingConcept";

const invoicingConceptMutations = {

    CREATE_INVOICING_CONCEPT: async (_: any, {input}: any) => {
        const { 
            name, 
            SATcode, 
            description, 
            refrigeratedBox, 
            isTaxes, 
            taxRate, 
            typeTrip, 
            userLoggedIn,
            idAccountingAccount,
            accountingAccount,
            nameAccountingAccount,
            idEnterprise,
            isOtherIncome,
            typeCrossing
        } = input;
        try {
            const newRecord = await invoicingConcept.query("exec create_invoicingConcept " +
            "@name = '"+name+"', @SATcode = '"+SATcode+"', @description = '"+description+"', " +
            "@refrigeratedBox = '"+refrigeratedBox+"', @isTaxes = '"+isTaxes+"', @taxRate = '"+taxRate+"', " +
            "@typeTrip = '"+typeTrip+"', @userLoggedIn = '"+userLoggedIn+"', " +
            "@idAccountingAccount = '"+idAccountingAccount+"', @accountingAccount = '"+accountingAccount+"', " +
            "@nameAccountingAccount = '"+nameAccountingAccount+"', " + "@idEnterprise = '"+idEnterprise+"', "+ "@isOtherIncome = '"+ isOtherIncome +"', "+
            "@typeCrossing = '"+typeCrossing+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_INVOICING_CONCEPT: async (_: any, {input}: any) => {
        const { 
            idInvoicingConcept, 
            name, 
            SATcode,
            description, 
            refrigeratedBox, 
            isTaxes, 
            taxRate, 
            typeTrip, 
            userLoggedIn,
            idAccountingAccount,
            accountingAccount,
            nameAccountingAccount,
            idEnterprise,
            isOtherIncome,
            typeCrossing
        } = input;
        try {
            const newRecord = await invoicingConcept.query("exec update_invoicingConcept " +
            "@idInvoicingConcept = '"+idInvoicingConcept+"', @name = '"+name+"', @SATcode = '"+SATcode+"', " +
            "@description = '"+description+"', @refrigeratedBox = '"+refrigeratedBox+"', @isTaxes = '"+isTaxes+"', " +
            "@taxRate = '"+taxRate+"', @typeTrip = '"+typeTrip+"', @userLoggedIn = '"+userLoggedIn+"', " +
            "@idAccountingAccount = '"+idAccountingAccount+"', @accountingAccount = '"+accountingAccount+"' , " +
            "@nameAccountingAccount = '"+nameAccountingAccount+"', " + "@idEnterprise = '"+idEnterprise+"', "+ "@isOtherIncome = '"+ isOtherIncome +"', "+
            "@typeCrossing = '"+typeCrossing+"' ");
            
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_INVOICING_CONCEPT: async (_: any, {input}: any) => {
        const {
            idInvoicingConcept,
            userLoggedIn
        } = input;

        try {
            await invoicingConcept.query("exec delete_invoicingConcept " +
                "@idInvoicingConcept = '" + idInvoicingConcept + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default invoicingConceptMutations;