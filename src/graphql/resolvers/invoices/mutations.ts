import { invoices } from "../../../db/Entities/invoices";

const invoicesMutations = {
    CREATE_INVOICE_FROM_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn,
        } = input;

        try {
            const newid = await invoices.query("exec create_invoice_from_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_INVOICE_CFDI: async (_: any, {input}: any) => {
        const {
            idInvoice,
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
            idCCP,
            userLoggedIn,
        } = input;

        try {
            await invoices.query("exec update_invoice_cfdi " +
                "@idInvoice = '" + idInvoice + "', " +
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
                "@idCCP = '"+idCCP+"', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'CFDI de factura actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_LINK_PDF_XML_INVOICE: async (_: any, {input}: any) => {
        const {
            idInvoice,
            linkPDF,
            linkXML,
            linkInvoicePDF,
            userLoggedIn,
        } = input;

        try {
            await invoices.query("exec set_link_pdf_xml_invoices " +
                "@idInvoice = '" + idInvoice + "', " +
                "@linkPDF = '" + linkPDF + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@linkInvoicePDF = '" + linkInvoicePDF + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de factura actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_INVOICE_SHIPPINGDATE: async (_: any, {input}: any) => {
        const {
            idInvoice,
            userLoggedIn,
            sentForCollectionDate
        } = input;

        try {
            const newRecord = await invoices.query("exec set_invoice_shippingDate " +
                "@idInvoice = '" + idInvoice + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@sentForCollectionDate = '" + sentForCollectionDate + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    SET_INVOICES_DOCUMENTS: async (_: any, {input}: any) => {
        const { idInvoice, userLoggedIn } = input;
        try {
            const newRecord = await invoices.query("exec set_document_invoiceDocuments @idInvoice = '"+idInvoice+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_INVOICES_DOCUMENTS: async (_: any, {input}: any) => {
        const { idDocument, link, document, userLoggedIn } = input;
        try {
            await invoices.query("exec set_linkInvoicesDocuments @idDocument = '"+idDocument+"', @link = '"+link+"', @document = '"+document+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_INVOICES_DOCUMENTS: async (_: any, {input}: any) => {
        const { idDocument, userLoggedIn } = input;
        try {
            await invoices.query("exec delete_invoicesDocuments @idDocument = '"+idDocument+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento eliminado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_INVOICE: async (_: any, {input}: any) => {
        const {
            idTrip,
            idUseOfCFDI,
            idPaymentMethod,
            idPayment,
            currency,
            exchangeRate,
            userLoggedIn,
        } = input;

        try {
            const newid = await invoices.query("exec create_invoice " +
                "@idTrip = '" + idTrip + "', " +
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
    SET_INVOICE_AMOUNTS: async (_: any, {input}: any) => {
        const {
            idInvoiceAmount,
            idInvoice,
            idTrip,
            idSalesFormatAmounts,
            idInvoicingConcept,
            subtotal,
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
            status
        } = input;

        try {
            await invoices.query("exec set_invoiceAmounts " +
                "@idInvoiceAmount = '" + idInvoiceAmount + "', " +
                "@idInvoice = '" + idInvoice + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@idSalesFormatAmounts = '" + idSalesFormatAmounts + "', " +
                "@idInvoicingConcept = '" + idInvoicingConcept + "', " +
                "@subtotal = '" + subtotal + "', " +
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
                "@status = '" + status + "' "
            );
            return 'Montos de factura actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_INVOICE: async (_: any, {input}: any) => {
        const {
            idInvoice,
            idTrip,
            idUseOfCFDI,
            idPaymentMethod,
            idPayment,
            currency,
            exchangeRate,
            userLoggedIn,
        } = input;

        try {
            const newid = await invoices.query("exec update_invoice " +
                "@idInvoice = '" + idInvoice + "', " +
                "@idTrip = '" + idTrip + "', " +
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
    SET_TOKEN_STAMPINVOICE: async (_: any, {input}: any) => {
        const {
            idInvoice,
            userLoggedIn,
        } = input;

        try {
            const newid = await invoices.query("exec set_token_stampInvoice " +
                "@idInvoice = '" + idInvoice + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_ASSET_INVOICE: async (_: any, {input}: any) => {
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
            const newid = await invoices.query("exec create_assetInvoice " +
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
    SET_ASSET_INVOICE_AMOUNTS: async (_: any, {input}: any) => {
        const {
            idInvoiceAmount,
            idInvoice,
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
            await invoices.query("exec set_assetInvoiceAmounts " +
                "@idInvoiceAmount = '" + idInvoiceAmount + "', " +
                "@idInvoice = '" + idInvoice + "', " +
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
    UPDATE_ASSET_INVOICE: async (_: any, {input}: any) => {
        const {
            idInvoice,
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
            const newid = await invoices.query("exec update_assetInvoice " +
                "@idInvoice = '" + idInvoice + "', " +
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

    }
};

export default invoicesMutations;