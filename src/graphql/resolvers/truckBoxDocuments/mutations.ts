import { truckBoxDocuments } from "../../../db/Entities/truckBoxDocuments";

const truckBoxDocumentsMutations = {
    //SET_TRUCKBOX_DOCUMENTS
    UPLOAD_TRUCKBOX_IMAGES: async (_: any, {input}: any) => {
        const { 
            idTruckBox,
            idDocument,
            nameDocument,
            documentLink,
            userLoggedIn,
            typeDocument
        } = input;
        try {
            await truckBoxDocuments.query("exec upload_truckBoxDocuments @idTruckBox = '"+idTruckBox+"', @idDocument = '"+idDocument+"', @nameDocument = '"+nameDocument+"', @documentLink = '"+documentLink+"', @userLoggedIn ='"+userLoggedIn+"', @typeDocument = '"+typeDocument+"'");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRUCKBOX_IMAGES: async (_: any, {input}: any) => {
        const {
            id,
            userLoggedIn
        } = input;

        try {
            const link = await truckBoxDocuments.query("exec delete_truckBoxDocuments " +
                "@id = '" + id + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return link;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRUCKBOX_DOCUMENTS: async (_: any, {input}: any) => {
        const { idTruckBox, nameDocument, userLoggedIn } = input;
        try {
            const newRecord = await truckBoxDocuments.query("exec create_truckBoxDocuments @idTruckBox = '"+idTruckBox+"', @nameDocument = '"+nameDocument+"', @userLoggedIn = '"+userLoggedIn+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_TRUCKBOX_DOCUMENTS: async (_: any, {input}: any) => {
        const { idTruckBox, id, documentLink} = input;
        try {
            await truckBoxDocuments.query("exec set_link_document_truckBoxDocuments @idTruckBox = '"+idTruckBox+"', @id = '"+id+"', @documentLink = '"+documentLink+"'");
            return 'Documento actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRUCKBOX_DOCUMENTS: async (_: any, {input}: any) => {
        const {
            id,
            userLoggedIn
        } = input;

        try {
            const link = await truckBoxDocuments.query("exec delete_truckBoxDocument " +
                "@id = '" + id + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return link;
        } catch (error) {
            console.log(error);
        }

    }
};

export default truckBoxDocumentsMutations;