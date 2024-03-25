import { employeesDocuments } from "../../../db/Entities/employeesDocuments";

const employeesDocumentsQueries = {
    GET_EMPLOYEES_DOCUMENTS: async (_: any, {idEmployees}: any) => {
        try{
            const result = await employeesDocuments.query("exec get_employeesDocuments @idEmployees = '"+ idEmployees +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_CANDIDATE_DOCUMENTS: async (_: any, {idCandidate}: any) => {
        try {
            const result = await employeesDocuments.query("exec get_candidatesDocuments @idCandidate = '"+idCandidate+"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
};

export default employeesDocumentsQueries;