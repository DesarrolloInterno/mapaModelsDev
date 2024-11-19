import { typeDocumentsEmployees } from "../../../db/Entities/typeDocumentsEmployees";

const typeDocumentsEmployeesQueries = {
    GET_ALL_TYPE_DOCUMENTS_EMPLOYEES: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await typeDocumentsEmployees.query("exec get_all_typeDocumentsEmployees @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
};

export default typeDocumentsEmployeesQueries;