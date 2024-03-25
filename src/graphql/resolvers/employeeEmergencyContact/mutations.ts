import { employeeEmergencyContact } from "../../../db/Entities/employeeEmergencyContact";

const employeeEmergencyContactMutations = {
    CREATE_EMPLOYEE_EMERGENCY_CONTACT: async (_: any, {input}: any) => {
        const { 
            idEmployee,
            name,
            address,
            phone,
            mail,
            relationship,
            userLoggedIn
        } = input;
        try {
            await employeeEmergencyContact.query("exec create_employeeEmergencyContact @idEmployee = '"+idEmployee+"', @name = '"+name+"', @address = '"+address+"', @phone = '"+phone+"', @mail = '"+mail+"', @relationship = '"+relationship+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro agregado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_EMPLOYEE_EMERGENCY_CONTACT: async (_: any, {input}: any) => {
        const { 
            idEmployeeEmergencyContact,
            idEmployee,
            name,
            address,
            phone,
            mail,
            relationship,
            userLoggedIn
        } = input;
        try {
            await employeeEmergencyContact.query("exec edit_employeeEmergencyContact @idEmployeeEmergencyContact = '"+idEmployeeEmergencyContact+"', @idEmployee = '"+idEmployee+"', @name = '"+name+"', @address = '"+address+"', @phone = '"+phone+"', @mail = '"+mail+"', @relationship = '"+relationship+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro editado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EMPLOYEE_EMERGENCY_CONTACT: async (_: any, {input}: any) => {
        const { 
            idEmployeeEmergencyContact,
            userLoggedIn
        } = input;
        try {
            await employeeEmergencyContact.query("exec delete_employeeEmergencyContact @idEmployeeEmergencyContact = '"+idEmployeeEmergencyContact+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
};

export default employeeEmergencyContactMutations;