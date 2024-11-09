import { typeDocumentsClients } from "../../../db/Entities/typeDocumentsClients";

const typeDocumentsClientsMutations = {

    CREATE_TYPE_DOCUMENTS_CLIENTS: async (_: any, {input}: any) => {
        const {name, description, userLoggedIn, typeClient, idEnterprise} = input;
        try {
            const newRecord = await typeDocumentsClients.query("exec create_typeDocumentsClients @name = '"+name+"', @description = '"+description+"', @typeClient = '"+typeClient+"', @userLoggedIn = '"+userLoggedIn+"', @idEnterprise = '"+ idEnterprise +"'");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TYPE_DOCUMENT_CLIENT: async (_: any, {input}: any) => {
        const {idTypeDocumentClient, name, description, userLoggedIn, typeClient, idEnterprise} = input;
        try {
            const newRecord = await typeDocumentsClients.query("exec update_typeDocumentsClients @idTypeDocumentClient = " + idTypeDocumentClient + ", @name = '"+name+"', @description = '"+description+"', @typeClient = '"+typeClient+"', @userLoggedIn = '"+userLoggedIn+"', @idEnterprise = '"+ idEnterprise +"'");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TYPE_DOCUMENT_CLIENT: async (_: any, {input}: any) => {
        const {idTypeDocumentClient, userLoggedIn} = input;
        try {
            await typeDocumentsClients.query("exec delete_typeDocumentsClients @idTypeDocumentClient = " + idTypeDocumentClient + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return "Tipo de documento eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_TYPE_DOCUMENT_CLIENT: async (_: any, {input}: any) => {
        const {idTypeDocumentClient, userLoggedIn} = input;
        try {
            const newRecord = await typeDocumentsClients.query("exec enable_typeDocumentsClients @idTypeDocumentClient = " + idTypeDocumentClient + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
};

export default typeDocumentsClientsMutations;