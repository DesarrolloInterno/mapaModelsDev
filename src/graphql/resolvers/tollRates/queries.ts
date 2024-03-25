import { tollRates } from "../../../db/Entities/tollRates";

const tollRatesQueries = {
    
    GET_TOLLRATES_BY_IDTOLLBOOTH: async (_: any, {idTollBooth}: any) => {
        try{
            const result = await tollRates.query("exec get_tollRates_by_idTollBooths @idTollBooth = '"+ idTollBooth +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default tollRatesQueries;