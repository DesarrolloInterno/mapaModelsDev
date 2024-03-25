import { jobTitle } from "../../../db/Entities/jobTitle";

const jobTitleQuery = {

    GET_ALL_JOBTITLE: async (_: any, {status}: any) => {
        try{
            const result = await jobTitle.query("exec get_AllJobTitle @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TYPERECEIPT_BY_JOBTITLE: async (_: any, {idJobTitle}: any) => {
        try{
            const result = await jobTitle.query("exec get_jobTitle_typeReceipt @idJobTitle = '"+ idJobTitle +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default jobTitleQuery;
