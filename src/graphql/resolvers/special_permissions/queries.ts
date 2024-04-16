import { special_permissions } from "../../../db/Entities/special_permissions";

const special_permissionsQueries = {

    GET_SPECIAL_PERMISSIONS_FOR_USER: async (_: any, {idUser}: any) => {
        try {
            const result = await special_permissions.query("exec get_special_permissions_for_users @idUser = " + idUser);
            return result;
        } catch (error) {
            console.log(error);
        }
    },

};

export default special_permissionsQueries;