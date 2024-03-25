import {staff} from "../../../db/Entities/staff";

const staffQueries = {
    GET_STAFF_REACTIVATE_PASSWORD: async (_: any, {typeStaff}: any) => {
        try {
            const result = await staff.query("exec get_staff_reactivate_password @typeStaff = '" + typeStaff+"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

export default staffQueries;