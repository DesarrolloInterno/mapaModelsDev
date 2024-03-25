import { permissions_users } from "../../../db/Entities/permissions_users";

const permissions_usersMutations = {
    UPDATE_PERMISSIONS: async (_: any, {input}: any) => {
        try {
            const { idUser, idScreen, status, TypePermits, userLoggedIn } = input;
            await permissions_users.query("exec edit_permits @idUser = " + idUser + ", @idScreen = " + idScreen + ", @status = " + status + ", @TypePermits = '" + TypePermits + "', @userLoggedIn = '" + userLoggedIn + "' ");
            return "Permisos actualizados";
        } catch (error) {
            console.log(error);
        }
    },
    GAVE_THE_SAME_PERMISSIONS: async (_: any, {input}: any) => {
        try {
            const { idUser, idSecondUser, userLoggedIn } = input;
            await permissions_users.query("exec giveTheSamePermissions @idUser = " + idUser + ", @idSecondUser = " + idSecondUser + ", @userLoggedIn = '" + userLoggedIn + "' ");
            return "Permisos actualizados";
        } catch (error) {
            console.log(error);
        }
        
    }

};

export default permissions_usersMutations;