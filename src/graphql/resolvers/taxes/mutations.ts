import { taxes } from "../../../db/Entities/taxes";

const taxesMutations = {
    
    CREATE_TAX: async (_: any, {input}: any) => {
        const { 
            SATcode, 
            description, 
            taxChargeType, 
            percentage, 
            taxFactor, 
            userLoggedIn,
            idAccountingAccountInvoices,
            accountingAccountInvoices,
            nameAccountingAccountInvoices,
            idAccountingAccountPayments,
            accountingAccountPayments,
            nameAccountingAccountPayments,
            idAccountingAccountInvoicePayments,
            accountingAccountInvoicePayments,
            nameAccountingAccountInvoicePayments,
            idAccountingAccountPaymentPayments,
            accountingAccountPaymentPayments,
            nameAccountingAccountPaymentPayments,
            idEnterprise
        } = input;
        try {
            const newRecord = await taxes.query("exec create_taxes "+
            "@SATcode = '"+SATcode+"', @description = '"+description+"', "+
            "@taxChargeType = '"+taxChargeType+"', @percentage = '"+percentage+"', "+
            "@taxFactor = '"+taxFactor+"', @userLoggedIn = '"+userLoggedIn+"', "+
            "@idAccountingAccountInvoices = '"+idAccountingAccountInvoices+"', "+
            "@accountingAccountInvoices = '"+accountingAccountInvoices+"', "+
            "@nameAccountingAccountInvoices = '"+nameAccountingAccountInvoices+"', "+
            "@idAccountingAccountPayments = '"+idAccountingAccountPayments+"', "+
            "@accountingAccountPayments = '"+accountingAccountPayments+"', "+
            "@nameAccountingAccountPayments = '"+nameAccountingAccountPayments+"', "+
            "@idAccountingAccountInvoicePayments = '"+idAccountingAccountInvoicePayments+"', "+
            "@accountingAccountInvoicePayments = '"+accountingAccountInvoicePayments+"', "+
            "@nameAccountingAccountInvoicePayments = '"+nameAccountingAccountInvoicePayments+"', "+
            "@idAccountingAccountPaymentPayments = '"+idAccountingAccountPaymentPayments+"', "+
            "@accountingAccountPaymentPayments = '"+accountingAccountPaymentPayments+"', "+
            "@nameAccountingAccountPaymentPayments = '"+nameAccountingAccountPaymentPayments+"', "+
            "@idEnterprise = '"+idEnterprise+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TAX: async (_: any, {input}: any) => {
        const { 
            idTax, 
            SATcode, 
            description, 
            taxChargeType, 
            percentage, 
            taxFactor, 
            userLoggedIn,
            idAccountingAccountInvoices,
            accountingAccountInvoices,
            nameAccountingAccountInvoices,
            idAccountingAccountPayments,
            accountingAccountPayments,
            nameAccountingAccountPayments,
            idAccountingAccountInvoicePayments,
            accountingAccountInvoicePayments,
            nameAccountingAccountInvoicePayments,
            idAccountingAccountPaymentPayments,
            accountingAccountPaymentPayments,
            nameAccountingAccountPaymentPayments,
            idEnterprise
        } = input;
        try {
            const newRecord = await taxes.query("exec update_taxes "+
            "@idTax = '"+idTax+"', @SATcode = '"+SATcode+"', "+
            "@description = '"+description+"', @taxChargeType = '"+taxChargeType+"', "+
            "@percentage = '"+percentage+"', @taxFactor = '"+taxFactor+"', @userLoggedIn = '"+userLoggedIn+"', "+
            "@idAccountingAccountInvoices = '"+idAccountingAccountInvoices+"', "+
            "@accountingAccountInvoices = '"+accountingAccountInvoices+"', "+
            "@nameAccountingAccountInvoices = '"+nameAccountingAccountInvoices+"', "+
            "@idAccountingAccountPayments = '"+idAccountingAccountPayments+"', "+
            "@accountingAccountPayments = '"+accountingAccountPayments+"', "+
            "@nameAccountingAccountPayments = '"+nameAccountingAccountPayments+"', " +
            "@idAccountingAccountInvoicePayments = '"+idAccountingAccountInvoicePayments+"', "+
            "@accountingAccountInvoicePayments = '"+accountingAccountInvoicePayments+"', "+
            "@nameAccountingAccountInvoicePayments = '"+nameAccountingAccountInvoicePayments+"', "+
            "@idAccountingAccountPaymentPayments = '"+idAccountingAccountPaymentPayments+"', "+
            "@accountingAccountPaymentPayments = '"+accountingAccountPaymentPayments+"', "+
            "@nameAccountingAccountPaymentPayments = '"+nameAccountingAccountPaymentPayments+"', "+
            "@idEnterprise = '"+idEnterprise+"' ");
            
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TAX: async (_: any, {input}: any) => {
        const {
            idTax,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await taxes.query("exec delete_tax " +
                "@idTax = '" + idTax + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default taxesMutations;