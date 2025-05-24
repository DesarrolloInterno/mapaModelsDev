import { debitNotes } from "../../../db/Entities/debitNotes";

const debitNotesMutations = {
    CREATE_DEBIT_NOTE: async (_: any, {input}: any) => {
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
            const newid = await debitNotes.query("exec create_debitNote " +
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
    SET_DEBIT_NOTE_AMOUNTS: async (_: any, {input}: any) => {
        const {
            idDebitNoteAmount,
            idDebitNote,
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
            await debitNotes.query("exec set_debitNoteAmounts " +
                "@idDebitNoteAmount = '" + idDebitNoteAmount + "', " +
                "@idDebitNote = '" + idDebitNote + "', " +
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
    UPDATE_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
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
            const newid = await debitNotes.query("exec update_debitNote " +
                "@idDebitNote = '" + idDebitNote + "', " +
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
    CREATE_RELATED_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            numDebitNote,
            idInvoice,
            numInvoice,
            numTrip,
            total,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newid = await debitNotes.query("exec create_related_debitNote " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@numDebitNote = '" + numDebitNote + "', " +
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
    DELETE_RELATED_DEBIT_NOTES_BY_ID_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await debitNotes.query("exec delete_relatedDebitNotes_by_idDebitNote " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return 'Nota eliminada correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_DEBIT_NOTE_CFDI: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            UUID,
            dateCFDI,
            codStatus,
            satSeal,
            SATcertificateNumber,
            CFDIstamp,
            SATStamp,
            originalChain,
            LinkQR,
            xmlText,
            userLoggedIn,
        } = input;

        try {
            await debitNotes.query("exec update_debit_note_cfdi " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@UUID = '" + UUID + "', " +
                "@dateCFDI = '" + dateCFDI + "', " +
                "@codStatus = '" + codStatus + "', " +
                "@satSeal = '" + satSeal + "', " +
                "@SATcertificateNumber = '" + SATcertificateNumber + "', " +
                "@CFDIstamp = '" + CFDIstamp + "', " +
                "@SATStamp = '" + SATStamp + "', " +
                "@originalChain = '" + originalChain + "', " +
                "@LinkQR = '" + LinkQR + "', " +
                "@xmlText = '" + xmlText + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'CFDI de nota de débito actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TOKEN_STAMP_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            userLoggedIn
        } = input;

        try {
            const newid = await debitNotes.query("exec set_token_stampDebitNote " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_PDF_XML_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            linkXML,
            linkDebitNotePDF,
            userLoggedIn,
        } = input;

        try {
            await debitNotes.query("exec set_link_pdf_xml_debitNote " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@linkDebitNotePDF = '" + linkDebitNotePDF + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de nota de debito actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            userLoggedIn
        } = input;

        try {
            await debitNotes.query("exec delete_debitNote " +
            "@idDebitNote = '" + idDebitNote + "', " +
            "@userLoggedIn = '" + userLoggedIn + "'"
            );
            return 'Nota eliminada correctamente';
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_DEBIT_NOTE_CANCEL_CFDI: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            dateCancelCFDI,
            statusUUID,
            statusCancelCFDI,
            userLoggedIn,
        } = input;

        try {
            await debitNotes.query("exec update_debitNote_cancel_cfdi " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@dateCancelCFDI = '" + dateCancelCFDI + "', " +
                "@statusUUID = '" + statusUUID + "', " +
                "@statusCancelCFDI = '" + statusCancelCFDI + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Acuse cancelación de nota de débito actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TOKENCANCEL_STAMP_DEBITNOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            userLoggedIn,
        } = input;

        try {
            const newid = await debitNotes.query("exec set_tokenCancel_stampDebitNotes " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_ACUSE_DEBIT_NOTE: async (_: any, {input}: any) => {
        const {
            idDebitNote,
            linkXML,
            userLoggedIn,
        } = input;

        try {
            await debitNotes.query("exec set_link_acuse_debitNote " +
                "@idDebitNote = '" + idDebitNote + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de factura actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    }
}

export default debitNotesMutations;