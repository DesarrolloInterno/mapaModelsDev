import { tripDispatchDocuments } from "../../../db/Entities/tripDispatchDocuments";

const tripDispatchDocumentsMutations = {

    SET_DISPATCH_DOCUMENT_TRIP: async (_: any, {input}: any) => {
        const { idTrip, userLoggedIn } = input;
        try {
            const newRecord = await tripDispatchDocuments.query("exec set_document_dispatchDocument_trip @idTrip = '"+idTrip+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_DISPATCH_DOCUMENT_TRIP: async (_: any, {input}: any) => {
        const { idDocument, link, document, userLoggedIn } = input;
        try {
            const updateRecord = await tripDispatchDocuments.query("exec set_linkDispatchDocument_trip @idDocument = '"+idDocument+"', @link = '"+link+"', @document = '"+document+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return updateRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIP_DISPATCH_DOCUMENT: async (_: any, {input}: any) => {
        const { idDocument, userLoggedIn } = input;
        try {
            const deleteRecord = await tripDispatchDocuments.query("exec delete_tripDispatchDocuments @idDocument = '"+idDocument+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return deleteRecord
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_MOORINGGEAR: async (_: any, {input}: any) => {
        const {
            idTrip,
			wheelChocks,
            straps,
            userLoggedIn
        } = input;

        try {
            await tripDispatchDocuments.query("exec update_trip_mooringGear " +
                "@idTrip = '" + idTrip + "', " +
                "@wheelChocks = '" + wheelChocks + "', " +
                "@straps = '" + straps + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Equipo de amarre actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_FINANCIAL_RECEIPT_TRIP: async (_: any, {input}: any) => {
        const { idTrip, userLoggedIn } = input;
        try {
            const newRecord = await tripDispatchDocuments.query("exec set_document_financialReceipts_trip @idTrip = '"+idTrip+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_FINANCIAL_RECEIPT_TRIP: async (_: any, {input}: any) => {
        const { idDocument, link, document, userLoggedIn } = input;
        try {
            await tripDispatchDocuments.query("exec set_linkFinancialReceipt_trip @idDocument = '"+idDocument+"', @link = '"+link+"', @document = '"+document+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIP_FINANCIAL_RECEIPT: async (_: any, {input}: any) => {
        const { idDocument, userLoggedIn } = input;
        try {
            await tripDispatchDocuments.query("exec delete_tripFinancialReceipt @idDocument = '"+idDocument+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento eliminado correctamente'
        } catch (error) {
            console.log(error);
        }
    }
};

export default tripDispatchDocumentsMutations;