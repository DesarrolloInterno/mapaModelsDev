import { employeesDocuments } from "../../../db/Entities/employeesDocuments";

const employeesDocumentsMutations = {
    SET_EMPLOYEE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idEmployees, idDocument, userLoggedIn } = input;
        try {
            const newRecord = await employeesDocuments.query("exec set_document_Employees @idEmployees = '"+idEmployees+"', @idDocument = '"+idDocument+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_CANDIDATE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idCandidate, idDocument, userLoggedIn } = input;
        try {
            const newRecord = await employeesDocuments.query("exec set_document_Candidates @idCandidate = '"+idCandidate+"', @idDocument = '"+idDocument+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_EMPLOYEE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idEmployeesDocuments, link, userLoggedIn } = input;
        try {
            await employeesDocuments.query("exec set_linkEmployeesDocuments @idEmployeesDocuments = '"+idEmployeesDocuments+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EMPLOYEE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idEmployeesDocuments, userLoggedIn } = input;
        try {
            const result = await employeesDocuments.query("exec delete_EmployeesDocuments @idEmployeesDocuments = '"+idEmployeesDocuments+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return result[0].lastLink
        } catch (error) {
            console.log(error);
        }
    },
};

export default employeesDocumentsMutations;