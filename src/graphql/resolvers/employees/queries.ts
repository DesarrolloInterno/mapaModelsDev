import { employees } from "../../../db/Entities/employees";

const employeesQueries = {
    GET_ALL_EMPLOYEES: async (_: any, {status}: any) => {
        try{
            const result = await employees.query("exec get_all_employees @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_EMPLOYEE_BY_ID: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employees.query("exec get_employee @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_NAME_EMPLOYEE: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employees.query("exec get_name_employee @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DOC_MEDICAL_VALIDITY: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employees.query("exec get_doc_medicalValidity_employee @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DOC_ANTIDOPING_EMPLOYEE: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employees.query("exec get_doc_antidoping_employee @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TYPERECEIPT_BY_EMPLOYEE: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employees.query("exec get_employees_typeReceipt @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TYPERECEIPT_EMPLOYEE_FILE: async (_: any, {idEmployeeTypeReceipt}: any) => {
        try{
            const result = await employees.query("exec get_employees_typeReceipt_for_file @idEmployeeTypeReceipt = '"+ idEmployeeTypeReceipt +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_ALL_REGISTRATION_DISMISSAL_EMPLOYEE: async (_: any, {date1, date2, status, idDepartment}: any) => {
        try{
            const result = await employees.query("exec get_all_registration_dismissal_employees @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @status = '"+ status +"', @idDepartment = '"+ idDepartment +"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_DRIVERLICENSE_EMPLOYEE: async (_: any, {date1, date2}: any) => {
        try{
            const result = await employees.query("exec get_all_driverLicenses @date1 = '"+ date1 +"', @date2 = '"+ date2 +"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_DRIVERLICENSE_EMPLOYEE2: async (_: any, {date1, date2, typeReport, status, idDepartment}: any) => {
        try{
            const result = await employees.query("exec get_all_driverLicenses2 @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @typeReport = '"+ typeReport +"', @status = '"+ status +"', @idDepartment = '"+ idDepartment +"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ANTIDOPING_EMPLOYEE: async (_: any, {date1, date2, typeReport, status, idDepartment}: any) => {
        try{
            const result = await employees.query("exec get_all_antidoping @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @typeReport = '"+ typeReport +"', @status = '"+ status +"', @idDepartment = '"+ idDepartment +"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_MEDICAL_VALIDITY_EMPLOYEE: async (_: any, {date1, date2, typeReport, status, idDepartment}: any) => {
        try{
            const result = await employees.query("exec get_all_medicalValidity @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @typeReport = '"+ typeReport +"', @status = '"+ status +"', @idDepartment = '"+ idDepartment +"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_WORKER_ROTATION: async (_: any, {date, idDepartment}: any) => {
        try{
            const result = await employees.query("exec get_worker_rotation @date = '"+ date +"', @idDepartment = '"+ idDepartment +"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
};

export default employeesQueries;