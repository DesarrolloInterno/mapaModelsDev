import { permissions_users } from "../../../db/Entities/permissions_users";

const permissions_usersQueries = {
  GET_PERMISSIONS_FOR_USER: async (_: any, {idUser}: any) => {
    try {
      const result = await permissions_users.query("exec get_permissions_for_users @idUser = " + idUser);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_ACTIVE_PERMISSIONS: async (_: any, {idUser}: any) => {
    try {
      const result = await permissions_users.query("exec get_active_permits @idUser = " + idUser);
      return result;
    } catch (error) {
      console.log(error);
    }

  },

};

export default permissions_usersQueries;