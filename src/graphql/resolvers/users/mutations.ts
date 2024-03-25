import { users } from "../../../db/Entities/users";

const usersMutations = {
    SET_TOKEN_CHANGE_PASSWORD: async (_: any, {input}: any) => {
        const {idUser, token} = input;
        try {
            await users.query("exec set_token_change_password @idUser = " + idUser + ", @token = '" + token + "'");
            return "Token agregado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    SET_NEW_PASSWORD: async (_: any, {input}: any) => {
        const {idUser, password, user} = input;
        try {
            const message = await users.query("exec set_new_password @id = " + idUser + ", @password = '"+password+"', @encrypt = '"+process.env.ENCRYPT+"', @user = '"+user+"'");
            return message[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DISABLE_FIRST_ACCESS: async (_: any, {input}: any) => {
        const {idUser} = input;
        try {
            await users.query("exec disable_first_access @id = " + idUser +" ");
            return "Primer acceso desactivado";
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_USER: async (_: any, {input}: any) => {
        const {user, name, email, password, userLoggedIn, idEmployee, idEnterprise} = input;
        try {
            const newUser = await users.query("exec create_user "+
            "@user = '"+user+"', "+
            "@name = '"+name+"', "+
            "@email = '"+email+"', "+
            "@password = '"+password+"', "+
            "@encrypt = '"+process.env.ENCRYPT+"', "+
            "@userLoggedIn = '"+userLoggedIn+"', "+
            "@idEmployee = '"+idEmployee+"', "+
            "@idEnterprise = '"+idEnterprise+"' ");

            console.log('newUser', newUser);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_USER: async (_: any, {input}: any) => {
        const {idUser, userLoggedIn} = input;
        try {
            await users.query("exec delete_user @idUser = " + idUser + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return "Usuario eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_USER: async (_: any, {input}: any) => {
        const {idUser, userLoggedIn} = input;
        try {
            const newRecord = await users.query("exec enable_user @idUser = " + idUser + ", @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_USER: async (_: any, {input}: any) => {
        const { idUser, user, name, email, userModified, idEmployee, idEnterprise } = input;
        try {
            const newRecord = await users.query("exec update_user "+
            "@idUser = " + idUser + ", "+
            "@user = '"+user+"', "+
            "@name = '"+name+"', "+
            "@email = '"+email+"', "+
            "@userModified = '"+userModified+"', "+
            "@idEmployee = '"+idEmployee+"', "+ 
            "@idEnterprise = '"+idEnterprise+"' ");
            
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_END_DATE_PASSWORD: async (_: any, {input}: any) => {
        const { idUser, endDatePassword, userModified } = input;
        try {
            const response = await users.query("exec update_end_date_password @idUser = " + idUser + ", @end_date_password = '"+endDatePassword+"', @userModified = '"+userModified+"' ");
            return response[0].response;
        } catch (error) {
            console.log(error);
        }
    },
};

export default usersMutations;