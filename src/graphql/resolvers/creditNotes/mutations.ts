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

    },
    UPDATE_CREDIT_NOTE_CFDI: async (_: any, {input}: any) => {
        const {
            idCreditNote,
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
            await creditNotes.query("exec update_credit_note_cfdi " +
                "@idCreditNote = '" + idCreditNote + "', " +
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
            return 'CFDI de nota de crédito actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TOKEN_STAMP_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            userLoggedIn
        } = input;

        try {
            const newid = await creditNotes.query("exec set_token_stampCreditNote " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_PDF_XML_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            linkXML,
            linkCreditNotePDF,
            userLoggedIn,
        } = input;

        try {
            await creditNotes.query("exec set_link_pdf_xml_creditNote " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@linkCreditNotePDF = '" + linkCreditNotePDF + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de nota de credito actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            userLoggedIn
        } = input;

        try {
            await creditNotes.query("exec delete_creditNote " +
            "@idCreditNote = '" + idCreditNote + "', " +
            "@userLoggedIn = '" + userLoggedIn + "'"
            );
            return 'Nota eliminada correctamente';
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_CREDIT_NOTE_CANCEL_CFDI: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            dateCancelCFDI,
            statusUUID,
            statusCancelCFDI,
            userLoggedIn,
        } = input;

        try {
            await creditNotes.query("exec update_creditNote_cancel_cfdi " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@dateCancelCFDI = '" + dateCancelCFDI + "', " +
                "@statusUUID = '" + statusUUID + "', " +
                "@statusCancelCFDI = '" + statusCancelCFDI + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Acuse cancelación de nota de crédito actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TOKENCANCEL_STAMP_CREDITNOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            userLoggedIn,
        } = input;

        try {
            const newid = await creditNotes.query("exec set_tokenCancel_stampCreditNotes " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_ACUSE_CREDIT_NOTE: async (_: any, {input}: any) => {
        const {
            idCreditNote,
            linkXML,
            userLoggedIn,
        } = input;

        try {
            await creditNotes.query("exec set_link_acuse_creditNote " +
                "@idCreditNote = '" + idCreditNote + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de factura actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    }
}

export default creditNotesMutations;