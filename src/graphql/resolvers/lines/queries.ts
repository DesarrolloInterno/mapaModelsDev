import { lines } from "../../../db/Entities/lines";

const linesQueries = {
    GET_LINES: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await lines.query("exec get_all_lines @status = '"+ status +"', @idEnterprise ='"+ idEnterprise + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default linesQueries;