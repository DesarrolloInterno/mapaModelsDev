import { screens } from "../../../db/Entities/screens";

const screensQueries = {
  GET_ALL_SCREENS: async (_: any, {status}: any) => {
    try {
      const result = await screens.query("exec get_all_screens @status = '"+ status +"' ");
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  GET_SCREEN_BY_IDTOPMENU: async (_: any, {status,idTopMenu}: any) => {
    try {
      const result = await screens.query("exec get_screens_by_idTopMenu @status = '"+status+"', @idTopMenu = "+ idTopMenu +" ");
      return result;
    } catch (error) {
      console.log(error);
    }

  },

};

export default screensQueries;