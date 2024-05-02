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
    }
};

export default truckBoxDocumentsMutations;