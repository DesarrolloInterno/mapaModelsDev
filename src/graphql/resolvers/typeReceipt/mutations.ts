import { typeReceipt } from "../../../db/Entities/typeReceipt";

const typeReceiptMutations = {
    CREATE_TYPE_RECEIPT: async (_: any, {input}: any) => {
        const {name, description, userLoggedIn} = input;
        try {
            const newRecord = await typeReceipt.query("exec create_typeReceipt @name = '"+name+"', @description = '"+description+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_TYPE_RECEIPT: async (_: any, {input}: any) => {
        const {idTypeReceipt, name, description, userLoggedIn} = input;
        try {
            const newRecord = await typeReceipt.query("exec update_typeReceipt @idTypeReceipt = '"+idTypeReceipt+"', @name = '"+name+"', @description = '"+description+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TYPE_RECEIPT: async (_: any, {input}: any) => {
        const {idTypeReceipt, userLoggedIn} = input;
        try {
            await typeReceipt.query("exec delete_typeReceipt @idTypeReceipt = '"+idTypeReceipt+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_TYPE_RECEIPT: async (_: any, {input}: any) => {
        const {idTypeReceipt, userLoggedIn} = input;
        try {
            const newRecord = await typeReceipt.query("exec enable_typeReceipt @idTypeReceipt = " + idTypeReceipt + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
};

export default typeReceiptMutations;