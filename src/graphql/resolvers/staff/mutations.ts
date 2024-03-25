import {staff} from "../../../db/Entities/staff";

const staffMutations = {

    UPDATE_STAFF_REACTIVATE_PASSWORD: async (_: any, {input}: any) => {
        const { idStaff, idUser, staffName, staffPhone, staffEmail, daysValidityPassword, alertValidityPassword, userLoggedIn } = input;
        try {
            await staff.query("exec update_staff_reactivate_password @idStaff = " + idStaff + ", @idUser = " + idUser + ", @staffName = '" + staffName + "', @staffPhone = '" + staffPhone + "', @staffEmail = '" + staffEmail + "', @daysValidityPassword = " + daysValidityPassword + ", @alertValidityPassword = " + alertValidityPassword + ", @userLoggedIn = '" + userLoggedIn + "' ");
            return "Registro actualizado correctamente";
        } catch (error) {
            console.log(error);
        }

    }
};

export default staffMutations;