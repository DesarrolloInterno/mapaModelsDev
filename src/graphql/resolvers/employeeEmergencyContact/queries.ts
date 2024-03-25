import { employeeEmergencyContact } from "../../../db/Entities/employeeEmergencyContact";

const employeeEmergencyContactQueries = {

    GET_EMPLOYEE_EMERGENCY_CONTACT: async (_: any, {idEmployee}: any) => {
        try{
            const result = await employeeEmergencyContact.query("exec get_employeeEmergencyContact_by_idEmployee @idEmployee = '"+ idEmployee +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    }

};

export default employeeEmergencyContactQueries;