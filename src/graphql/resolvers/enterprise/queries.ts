import { enterprise } from "../../../db/Entities/enterprise";

const enterpriseQueries = {
    GET_ALL_ENTERPRISES: async (_: any, {status}: any) => {
        try{
            const result = await enterprise.query("exec get_all_enterprise @status = '"+ status +"', @encrypt = '" + process.env.ENCRYPT + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ENTERPRISE_LOGO: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await enterprise.query("exec get_clientLogo_byidEnterprise @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ENTERPRISE_BY_ID: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await enterprise.query("exec get_enterprise_by_id @idEnterprise = '"+ idEnterprise +"', @encrypt = '" + process.env.ENCRYPT + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_NAME_ENTERPRISE: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await enterprise.query("exec get_name_enterprise @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default enterpriseQueries;