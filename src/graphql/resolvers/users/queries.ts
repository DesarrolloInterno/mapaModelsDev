import { users } from "../../../db/Entities/users";

const usersQueries = {
  GET_USER_LOGIN: async (_: any, {user, password}: any) => {
    try {
      const result = await users.query("exec get_user_login @user = '" + user + "', @password = '"+password+"', @encrypt = '"+process.env.ENCRYPT+"'");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_USER_BY_ID: async (_: any, {id}: any) => {
    try {
      const result = await users.query("exec get_user_by_id @id = " + id + "");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_USER_BY_ID_LOGIN: async (_: any, {id}: any) => {
    try {
      const result = await users.query("exec get_user_by_id @id = " + id + "");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_USER_BY_USER: async (_: any, {user}: any) => {
    try {
      const result = await users.query("exec get_user_by_user @user = '" + user + "'");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_USER_BY_TOKEN: async (_: any, {token}: any) => {
    try {
      const result = await users.query("exec get_user_by_token @token = '" + token + "'");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_ALL_USER: async (_: any, { passwordValidity,status }: any) => {
    try {
      const result = await users.query("exec get_all_user @passwordValidity = '" + passwordValidity + "', @status = '" + status + "'");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};

export default usersQueries;
