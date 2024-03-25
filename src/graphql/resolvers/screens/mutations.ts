import { screens } from "../../../db/Entities/screens";

const screensMutations = {
    CREATE_SCREEN: async (_: any, {input}: any) => {
        const {name, description, idTopMenu, location, order, menu, userLoggedIn } = input;
        try {
            const newRecord = await screens.query("exec create_screens @name = '"+name+"', @description = '"+description+"', @idTopMenu = '"+idTopMenu+"', @location = '"+location+"', @order = '"+order+"', @menu = '"+menu+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_SCREEN: async (_: any, {input}: any) => {
        const {idScreen, name, description, idTopMenu, location, order, menu, userLoggedIn } = input;
        try {
            const record = await screens.query("exec update_screen @idScreen = '"+idScreen+"', @name = '"+name+"', @description = '"+description+"', @idTopMenu = '"+idTopMenu+"', @location = '"+location+"', @order = '"+order+"', @menu = '"+menu+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return record[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_SCREEN: async (_: any, {input}: any) => {
        const {idScreen, userLoggedIn} = input;
        try {
            await screens.query("exec delete_screens @idScreen = '"+idScreen+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_SCREEN: async (_: any, {input}: any) => {
        const {idScreen, userLoggedIn} = input;
        try {
            const newRecord = await screens.query("exec enable_screen @idScreen = '"+idScreen+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    }
};

export default screensMutations;