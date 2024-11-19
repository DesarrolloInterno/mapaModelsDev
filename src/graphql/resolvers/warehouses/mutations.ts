import { warehouses } from "../../../db/Entities/warehouses";

const warehousesMutations = {

    CREATE_WAREHOUSE: async (_: any, {input}: any) => {
        const {
			name,
            observations,
            idCountry,
            country,
            code,
	        userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await warehouses.query("exec create_warehouse " +
                "@name = '" + name + "', " +
                "@observations = '" + observations + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@country = '" + country + "', " +
                "@code = '" + code + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_WAREHOUSE: async (_: any, {input}: any) => {
        const {
            idWarehouse,
			name,
            observations,
            idCountry,
            country,
            code,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await warehouses.query("exec update_warehouse " +
                "@idWarehouse = '" + idWarehouse + "', " +
                "@name = '" + name + "', " +
                "@observations = '" + observations + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@country = '" + country + "', " +
                "@code = '" + code + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_WAREHOUSE: async (_: any, {input}: any) => {
        const {
            idWarehouse,
            userLoggedIn
        } = input;

        try {
            await warehouses.query("exec delete_warehouse " +
                "@idWarehouse = '" + idWarehouse + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    }
};

export default warehousesMutations;