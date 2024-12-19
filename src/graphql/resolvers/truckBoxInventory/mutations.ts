import { truckBoxInventory } from "../../../db/Entities/truckBoxInventory";

const truckBoxInventoryMutations = {

    CREATE_TRUCKBOXINVENTORY: async (_: any, {input}: any) => {
        const {
			idTruckBox,
            issueDate,
            idWarehouse,
            positioner,
            observations,
	        userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await truckBoxInventory.query("exec create_truckBoxInventory " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@issueDate = '" + issueDate + "', " +
                "@idWarehouse = '" + idWarehouse + "', " +
                "@positioner = '" + positioner + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRUCKBOXINVENTORY: async (_: any, {input}: any) => {
        const {
            idTruckBoxInventory,
            idTruckBox,
			issueDate,
            idWarehouse,
            positioner,
            observations,
	        userLoggedIn
        } = input;

        try {
            const newRecord = await truckBoxInventory.query("exec update_truckBoxInventory " +
                "@idTruckBoxInventory = '" + idTruckBoxInventory + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@issueDate = '" + issueDate + "', " +
                "@idWarehouse = '" + idWarehouse + "', " +
                "@positioner = '" + positioner + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRUCKBOXINVENTORY: async (_: any, {input}: any) => {
        const {
            idTruckBoxInventory,
            userLoggedIn
        } = input;
        try {
            await truckBoxInventory.query("exec delete_truckBoxInventory " +
                "@idTruckBoxInventory = '" + idTruckBoxInventory + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxInventoryMutations;