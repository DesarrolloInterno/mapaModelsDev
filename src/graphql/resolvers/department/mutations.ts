import { department } from "../../../db/Entities/department";

const departmentMutations = {
    CREATE_DEPARTMENT: async (_: any, {input}: any) => {
        const {
            name,
            description,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await department.query("exec create_department " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    EDIT_DEPARTMENT: async (_: any, {input}: any) => {
        const {
            idDepartment,
            name,
            description,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const record = await department.query("exec edit_department " +
                "@idDepartment = '" + idDepartment + "', " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return record;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_DEPARTMENT: async (_: any, {input}: any) => {
        const {
            idDepartment,
            userLoggedIn
        } = input;

        try {
            await department.query("exec delete_department " +
                "@idDepartment = '" + idDepartment + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default departmentMutations;