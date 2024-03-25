import { clientDocuments } from "../../../db/Entities/clientDocuments";

const clientDocumentsMutations = {

    SET_POTENTIAL_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idPotentialClient, idDocument } = input;
        try {
            const newRecord = await clientDocuments.query("exec set_document_potentialClient @idPotentialClient = '"+idPotentialClient+"', @idDocument = '"+idDocument+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idClient, idDocument } = input;
        try {
            const newRecord = await clientDocuments.query("exec set_document_client @idClient = '"+idClient+"', @idDocument = '"+idDocument+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_POTENTIAL_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idPotentialClientDocument, link } = input;
        try {
            await clientDocuments.query("exec set_link_document_potential_Client @idPotentialClientDocument = '"+idPotentialClientDocument+"', @link = '"+link+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idClientDocument, link } = input;
        try {
            await clientDocuments.query("exec set_link_document_Client @idClientDocument = '"+idClientDocument+"', @link = '"+link+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_POTENTIAL_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idPotentialClientDocument } = input;
        try {
            const result = await clientDocuments.query("exec delete_PotentialClientDocument @idPotentialClientDocument = '"+idPotentialClientDocument+"' ");
            return result[0].lastLink
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idClientDocument } = input;
        try {
            const result = await clientDocuments.query("exec delete_ClientDocument @idClientDocument = '"+idClientDocument+"' ");
            return result[0].lastLink
        } catch (error) {
            console.log(error);
        }
    },
};

export default clientDocumentsMutations;