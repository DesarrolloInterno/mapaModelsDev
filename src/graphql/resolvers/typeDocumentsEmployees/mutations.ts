import { typeDocumentsEmployees } from "../../../db/Entities/typeDocumentsEmployees";

const typeDocumentsEmployeesMutations = {

    CREATE_TYPE_DOCUMENTS_EMPLOYEES: async (_: any, {input}: any) => {
        const {name, description, userLoggedIn} = input;
        try {
            const newRecord = await typeDocumentsEmployees.query("exec create_typeDocumentsEmployees @name = '"+name+"', @description = '"+description+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TYPE_DOCUMENTS_EMPLOYEES: async (_: any, {input}: any) => {
        const {idTypeDocumentsEmployees, userLoggedIn} = input;
        try {
            await typeDocumentsEmployees.query("exec delete_typeDocumentsEmployees @idTypeDocumentsEmployees = " + idTypeDocumentsEmployees + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return "Tipo de documento eliminado correctamente";
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TYPE_DOCUMENTS_EMPLOYEES: async (_: any, {input}: any) => {
        const {idTypeDocumentsEmployees, name, description, userLoggedIn} = input;
        try {
            const newRecord = await typeDocumentsEmployees.query("exec update_typeDocumentsEmployees @idTypeDocumentsEmployees = " + idTypeDocumentsEmployees + ", @name = '"+name+"', @description = '"+description+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_TYPE_DOCUMENTS_EMPLOYEES: async (_: any, {input}: any) => {
        const {idTypeDocumentsEmployees, userLoggedIn} = input;
        try {
            const newRecord = await typeDocumentsEmployees.query("exec enable_typeDocumentsEmployees @idTypeDocumentsEmployees = " + idTypeDocumentsEmployees + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
};

export default typeDocumentsEmployeesMutations;