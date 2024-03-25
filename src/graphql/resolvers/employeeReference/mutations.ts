import { employeeReference } from "../../../db/Entities/employeeReference";

const employeeReferenceMutations = {
    CREATE_EMPLOYEE_REFERENCE: async (_: any, {input}: any) => {
        const { 
            idEmployee,
            name,
            address,
            phone,
            mail,
            comment,
            userLoggedIn
        } = input;
        try {
            const newRecord = await employeeReference.query("exec create_employee_reference @idEmployee = '"+idEmployee+"', @name = '"+name+"', @address = '"+address+"', @phone = '"+phone+"', @mail = '"+mail+"', @comment = '"+comment+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_EMPLOYEE_REFERENCE: async (_: any, {input}: any) => {
        const { 
            idEmployeeReference,
            idEmployee,
            name,
            address,
            phone,
            mail,
            comment,
            userLoggedIn
        } = input;
        try {
            await employeeReference.query("exec edit_employee_reference @idEmployeeReference = '"+idEmployeeReference+"', @idEmployee = '"+idEmployee+"', @name = '"+name+"', @address = '"+address+"', @phone = '"+phone+"', @mail = '"+mail+"', @comment = '"+comment+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro editado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    SET_FILE_EMPLOYEE_REFERENCE: async (_: any, {input}: any) => {
        const { 
            idEmployeeReference,
            docLink,
            userLoggedIn
        } = input;
        try {
            await employeeReference.query("exec set_file_employee_reference @idEmployeeReference = '"+idEmployeeReference+"', @docLink = '"+docLink+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Archivo agregado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EMPLOYEE_REFERENCE: async (_: any, {input}: any) => {
        const { 
            idEmployeeReference,
            userLoggedIn
        } = input;
        try {
            await employeeReference.query("exec delete_employee_reference @idEmployeeReference = '"+idEmployeeReference+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    SET_STATUS_EMPLOYEE_RECEIPT: async (_: any, {input}: any) => {
        const { 
            idEmployeesTypeReceipt,
            returnedItem,
        } = input;
        try {
            await employeeReference.query("exec set_status_employee_Receipt @idEmployeesTypeReceipt = '"+idEmployeesTypeReceipt+"' , @returnedItem = '"+returnedItem+"' ");
            return "Estatus actualizado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
};

export default employeeReferenceMutations;