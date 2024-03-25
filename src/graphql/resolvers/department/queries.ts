import { department } from "../../../db/Entities/department";

const departmentQueries = {

    GET_ALL_DEPARTMENTS: async (_: any, {status}: any) => {
        try{
            const result = await department.query("exec get_all_departments @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default departmentQueries;