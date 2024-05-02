import { unitDocuments } from "../../../db/Entities/unitDocuments";

const unitDocumentsMutations = {
    //SET_UNIT_DOCUMENTS
    CREATE_UNIT_IMAGES: async (_: any, {input}: any) => {
        const { 
            idUnit,
            idDocument,
            nameDocument,
            documentLink,
            userLoggedIn,
            typeDocument
        } = input;
        try {
            await unitDocuments.query("exec set_unitDocuments @idUnit = '"+idUnit+"', @idDocument = '"+idDocument+"', @nameDocument = '"+nameDocument+"', @documentLink = '"+documentLink+"', @userLoggedIn ='"+userLoggedIn+"', @typeDocument = '"+typeDocument+"'");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_UNIT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idUnit, nameDocument, userLoggedIn } = input;
        try {
            const newRecord = await unitDocuments.query("exec create_unitDocuments @idUnit = '"+idUnit+"', @nameDocument = '"+nameDocument+"', @userLoggedIn = '"+userLoggedIn+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_UNIT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idUnit, id, documentLink} = input;
        try {
            await unitDocuments.query("exec set_link_document_unitDocuments @idUnit = '"+idUnit+"', @id = '"+id+"', @documentLink = '"+documentLink+"'");
            return 'Documento actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default unitDocumentsMutations;