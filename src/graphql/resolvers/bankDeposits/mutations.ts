import { bankDeposits } from "../../../db/Entities/bankDeposits";

const bankDepositsMutations = {
    CREATE_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idClient,
            idBankAccount,
            exchangeRate,
            amount,
            reference,
            bankDepositDate,
            bankDepositControlDate,
            observations,
            depositType,
            userLoggedIn,
            idEnterprise,
            balanceDue
        } = input;

        try {
            const newid = await bankDeposits.query("exec create_bankDeposits " +
                "@idClient = '" + idClient + "', " +
                "@idBankAccount = '" + idBankAccount + "', " +
                "@exchangeRate = '" + exchangeRate + "', " +
                "@amount = '" + amount + "', " +
                "@reference = '" + reference + "', " +
                "@bankDepositDate = '" + bankDepositDate + "', " +
                "@bankDepositControlDate = '" + bankDepositControlDate + "', " +
                "@observations = '" + observations + "', " +
                "@depositType = '" + depositType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@balanceDue = '" + balanceDue + "'"
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    SETBANKDEPOSITINVOICE: async (_: any, {input}: any) => {
        const {
            idBankdepositInvoices,
            idBankDeposit,
            numBankDeposit,
            bankDepositCurrency,
            idInvoice,
            numInvoice ,
            invoiceSeries,
            idClient,
            client,
            invoiceDate,
            invoiceCurrency,
            invoiceExchangeRate,
            invoiceTotal,
            invoiceBalance,
            depositFee,
            newInvoiceBalance,
            amount,
            status,
            keyTable,
            bankDepositExchangeRate,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newid = await bankDeposits.query("exec set_BankdepositInvoices " +
            "@idBankdepositInvoices = '" + idBankdepositInvoices + "', " +
            "@idBankDeposit = '" + idBankDeposit + "', " +
            "@numBankDeposit = '" + numBankDeposit + "', " +
            "@bankDepositCurrency = '" + bankDepositCurrency + "', " +
            "@idInvoice = '" + idInvoice + "', " +
            "@numInvoice = '" + numInvoice + "', " +
            "@invoiceSeries = '" + invoiceSeries + "', " +
            "@idClient = '" + idClient + "', " +
            "@client = '" + client + "', " +
            "@invoiceDate = '" + invoiceDate + "', " +
            "@invoiceCurrency = '" + invoiceCurrency + "', " +
            "@invoiceExchangeRate = '" + invoiceExchangeRate + "', " +
            "@invoiceTotal = '" + invoiceTotal + "', " +
            "@invoiceBalance = '" + invoiceBalance + "', " +
            "@depositFee = '" + depositFee + "', " +
            "@newInvoiceBalance = '" + newInvoiceBalance + "', " +
            "@amount = '" + amount + "', " +
            "@status = '" + status + "', " +
            "@keyTable = '" + keyTable  +"', "+
            "@bankDepositExchangeRate = '"+ bankDepositExchangeRate +"', "+
            "@userLoggedIn = '"+ userLoggedIn +"', "+
            "@idEnterprise = '"+ idEnterprise +"'"
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idBankDeposit,
            numBankDeposit,
            idClient,
            idBankAccount,
            exchangeRate,
            amount,
            reference,
            bankDepositDate,
            bankDepositControlDate,
            observations,
            depositType,
            userLoggedIn,
            balanceDue
        } = input;

        try {
            const newid = await bankDeposits.query("exec update_bankDeposits " +
                "@idBankDeposit = '" + idBankDeposit + "', " +
                "@numBankDeposit = '" + numBankDeposit + "', " +
                "@idClient = '" + idClient + "', " +
                "@idBankAccount = '" + idBankAccount + "', " +
                "@exchangeRate = '" + exchangeRate + "', " +
                "@amount = '" + amount + "', " +
                "@reference = '" + reference + "', " +
                "@bankDepositDate = '" + bankDepositDate + "', " +
                "@bankDepositControlDate = '" + bankDepositControlDate + "', " +
                "@observations = '" + observations + "', " +
                "@depositType = '" + depositType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@balanceDue = '" + balanceDue + "'"
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    REMOVE_INVOICE_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idInvoicesBankDeposit,
            idBankDeposit,
            idInvoice,
            userLoggedIn
        } = input;

        try {
            await bankDeposits.query("exec remove_invoice_bankDeposit " +
            "@idInvoicesBankDeposit = '" + idInvoicesBankDeposit + "', " +
            "@idBankDeposit = '" + idBankDeposit + "', " +
            "@idInvoice = '" + idInvoice + "', " +
            "@userLoggedIn = '" + userLoggedIn + "'"
            );
            return 'Factura eliminada del deposito correctamente';
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idBankDeposit,
            userLoggedIn
        } = input;

        try {
            await bankDeposits.query("exec delete_bankDeposit " +
            "@idBankDeposit = '" + idBankDeposit + "', " +
            "@userLoggedIn = '" + userLoggedIn + "'"
            );
            return 'Deposito eliminado correctamente';
        } catch (error) {
            console.log(error);
        }

    },
    SET_TOKEN_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idBankDeposit,
            userLoggedIn,
        } = input;

        try {
            const newid = await bankDeposits.query("exec set_token_stampPaymentSupplement " +
                "@idBankDeposit = '" + idBankDeposit + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_PDF_XML_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idBankDeposit,
            linkPDF,
            linkXML,
            userLoggedIn,
        } = input;

        try {
            await bankDeposits.query("exec set_link_pdf_xml_bankDeposit " +
                "@idBankDeposit = '" + idBankDeposit + "', " +
                "@linkPDF = '" + linkPDF + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de factura actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
};

export default bankDepositsMutations;