import { creditNotes } from "../../../db/Entities/creditNotes";

const creditNotesMutations = {
    CREATE_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idEnterprise,
            idClient,
            currency,
            exchangeRate,
            userLoggedIn,
            idPaymentMethod,
            idUseOfCFDI,
            idPayment
        } = input;

        try {
            const newid = await creditNotes.query("exec create_creditNote " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idClient = '" + idClient + "', " +
                "@currency = '" + currency + "', " +
                "@exchangeRate = '" + exchangeRate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idPaymentMethod = '" + idPaymentMethod + "', " +
                "@idUseOfCFDI = '" + idUseOfCFDI + "', " +
                "@idPayment = '" + idPayment + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    SET_CREDIT_NOTE_AMOUNTS: async (_: any, {input}: any) => {
        const {
            idCreditNoteAmount,
            idCreditNote,
            idTrip,
            idSalesFormatAmounts,
            idInvoicingConcept,
            idIVApercentage,
            IVApercentage,
            IVA,
            idRETpercentage,
            RETpercentage,
            RET,
            totalAmount,
            idSalesFormat,
            codeMeasuringUnit,
            measuringUnit,
            isTaxes,
            userLoggedIn,
            status,
            quantity,
            unitImport,
            subtotal
        } = input;

        try {
            await creditNotes.query("exec set_creditNoteAmounts " +
                "@idCreditNoteAmount = '" + idCreditNoteAmount + "', " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@idSalesFormatAmounts = '" + idSalesFormatAmounts + "', " +
                "@idInvoicingConcept = '" + idInvoicingConcept + "', " +
                "@idIVApercentage = '" + idIVApercentage + "', " +
                "@IVApercentage = '" + IVApercentage + "', " +
                "@IVA = '" + IVA + "', " +
                "@idRETpercentage = '" + idRETpercentage + "', " +
                "@RETpercentage = '" + RETpercentage + "', " +
                "@RET = '" + RET + "', " +
                "@totalAmount = '" + totalAmount + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@codeMeasuringUnit = '" + codeMeasuringUnit + "', " +
                "@measuringUnit = '" + measuringUnit + "', " +
                "@isTaxes = '" + isTaxes + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@status = '" + status + "', " +
                "@quantity = '" + quantity + "', " +
                "@unitImport = '" + unitImport + "', " +
                "@subtotal = '" + subtotal + "' "
            );
            return 'Montos de factura actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            idEnterprise,
            idClient,
            currency,
            exchangeRate,
            userLoggedIn,
            idPaymentMethod,
            idUseOfCFDI,
            idPayment,
        } = input;

        try {
            const newid = await creditNotes.query("exec update_creditNote " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idClient = '" + idClient + "', " +
                "@idUseOfCFDI = '" + idUseOfCFDI + "', " +
                "@idPaymentMethod = '" + idPaymentMethod + "', " +
                "@idPayment = '" + idPayment + "', " +
                "@currency = '" + currency + "', " +
                "@exchangeRate = '" + exchangeRate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    CREATE_RELATED_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            numCreditNote,
            idInvoice,
            numInvoice,
            numTrip,
            total,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newid = await creditNotes.query("exec create_related_creditNote " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@numCreditNote = '" + numCreditNote + "', " +
                "@idInvoice = '" + idInvoice + "', " +
                "@numInvoice = '" + numInvoice + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@total = '" + total + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_RELATED_CREDIT_NOTES_BY_ID_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await creditNotes.query("exec delete_relatedCreditNotes_by_idCreditNote " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return 'Nota eliminada correctamente'
        } catch (error) {
            console.log(error);
        }

    }
}

export default creditNotesMutations;