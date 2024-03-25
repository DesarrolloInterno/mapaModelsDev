import { employeeReference } from "../../../db/Entities/employeeReference";

const employeeReferenceQueries = {

    GET_REFERENCES_BY_ID_EMPLOYEE: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employeeReference.query("exec get_references_by_idEmployee @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_EMPLOYEE_BY_REFERENCES: async (_: any, {idEmployeeReference}: any) => {
        try{
            const result = await employeeReference.query("exec get_employee_by_reference @idEmployeeReference = '"+ idEmployeeReference +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    }

};

export default employeeReferenceQueries;