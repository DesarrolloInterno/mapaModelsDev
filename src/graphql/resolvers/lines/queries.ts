import { lines } from "../../../db/Entities/lines";

const linesQueries = {
    GET_LINES: async (_: any, {status}: any) => {
        try{
            const result = await lines.query("exec get_all_lines @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default linesQueries;