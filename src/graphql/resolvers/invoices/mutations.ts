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
            userLoggedIn,
        } = input;

        try {
            await invoices.query("exec set_link_pdf_xml_invoices " +
                "@idInvoice = '" + idInvoice + "', " +
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

export default invoicesMutations;