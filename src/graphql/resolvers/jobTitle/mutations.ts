import { jobTitle } from "../../../db/Entities/jobTitle";

const jobTitleMutations = {
    CREATE_JOBTITLE: async (_: any, {input}: any) => {
        const {name, description, higherPosition, userLoggedIn, idDepartment } = input;
        try {
            const newRecord = await jobTitle.query("exec create_jobTitle @name = '"+name+"', @description = '"+description+"', @higherPosition = '"+higherPosition+"', @userLoggedIn = '"+userLoggedIn+"', @idDepartment = '"+idDepartment+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_JOBTITLE: async (_: any, {input}: any) => {
        const {idJobTitle, name, description, higherPosition, userLoggedIn, idDepartment } = input;
        try {
            const newRecord = await jobTitle.query("exec update_jobTitle @idJobTitle = '"+idJobTitle+"', @name = '"+name+"', @description = '"+description+"', @higherPosition = '"+higherPosition+"', @userLoggedIn = '"+userLoggedIn+"', @idDepartment = '"+idDepartment+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_JOBTITLE: async (_: any, {input}: any) => {
        const {idJobTitle, userLoggedIn} = input;
        try {
            await jobTitle.query("exec delete_jobTitle @idJobTitle = '"+idJobTitle+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_JOBTITLE: async (_: any, {input}: any) => {
        const {idJobTitle, userLoggedIn} = input;
        try {
            const newRecord = await jobTitle.query("exec enable_jobTitle @idJobTitle = '"+idJobTitle+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    SET_JOBTITLE_TYPERECEIPT: async (_: any, {input}: any) => {
        const {idJobTitle, idTypeReceipt, userLoggedIn} = input;
        try {
            const newRecord = await jobTitle.query("exec set_jobTitle_typeReceipt @idJobTitle = '"+idJobTitle+"', @idTypeReceipt = '"+idTypeReceipt+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_JOBTITLE_TYPERECEIPT: async (_: any, {input}: any) => {
        const {idJobTitleTypeReceipt, userLoggedIn} = input;
        try {
            await jobTitle.query("exec delete_jobTitle_typeReceipt @idJobTitleTypeReceipt = '"+idJobTitleTypeReceipt+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    }
};

export default jobTitleMutations;