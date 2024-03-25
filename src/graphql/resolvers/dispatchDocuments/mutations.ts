import { dispatchDocuments } from "../../../db/Entities/dispatchDocuments";

const dispatchDocumentsMutations = {

    SET_DISPATCH_DOCUMENTS: async (_: any, {input}: any) => {
        const { idTripOrder, userLoggedIn } = input;
        try {
            const newRecord = await dispatchDocuments.query("exec set_document_dispatchDocuments @idTripOrder = '"+idTripOrder+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_DISPATCH_DOCUMENTS: async (_: any, {input}: any) => {
        const { idDocument, link, document, userLoggedIn } = input;
        try {
            await dispatchDocuments.query("exec set_linkDispatchDocuments @idDocument = '"+idDocument+"', @link = '"+link+"', @document = '"+document+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_DISPATCH_DOCUMENTS: async (_: any, {input}: any) => {
        const { idDocument, userLoggedIn } = input;
        try {
            await dispatchDocuments.query("exec delete_dispatchDocuments @idDocument = '"+idDocument+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento eliminado correctamente'
        } catch (error) {
            console.log(error);
        }
    }
};

export default dispatchDocumentsMutations;