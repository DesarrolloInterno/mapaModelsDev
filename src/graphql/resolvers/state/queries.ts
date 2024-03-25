import { state } from "../../../db/Entities/state";

const stateQueries = {
    GET_ALL_STATES: async (_: any, {}: any) => {
        try{
            const result = await state.query("exec get_all_State ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default stateQueries;