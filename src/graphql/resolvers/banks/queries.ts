import { banks } from "../../../db/Entities/banks";

const banksQueries = {
    GET_ALL_BANKS: async (_: any, {status}: any) => {
        try{
            const result = await banks.query("exec get_all_banks @status = '"+ status +"'");
            return result;

        } catch (error) {
            console.log(error);
        }

    }
};

export default banksQueries;