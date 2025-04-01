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
            idEnterprise,
            straps,
            wheelChocks
        } = input;

        try {
            const newRecord = await truckBoxInventory.query("exec create_truckBoxInventory " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@issueDate = '" + issueDate + "', " +
                "@idWarehouse = '" + idWarehouse + "', " +
                "@positioner = '" + positioner + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@straps = '" + straps + "', " +
                "@wheelChocks = '" + wheelChocks + "' "
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
	        userLoggedIn,
            straps,
            wheelChocks
        } = input;

        try {
            const newRecord = await truckBoxInventory.query("exec update_truckBoxInventory " +
                "@idTruckBoxInventory = '" + idTruckBoxInventory + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@issueDate = '" + issueDate + "', " +
                "@idWarehouse = '" + idWarehouse + "', " +
                "@positioner = '" + positioner + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@straps = '" + straps + "', " +
                "@wheelChocks = '" + wheelChocks + "' "
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
    },
    UPDATE_TRUCKBOXINVENTORY_MOORINGGEAR: async (_: any, {input}: any) => {
        const {
            idTruckBoxInventory,
            straps,
            wheelChocks,
            userLoggedIn
        } = input;

        try {
            await truckBoxInventory.query("exec update_truckBoxInventory_mooringGear " +
                "@idTruckBoxInventory = '" + idTruckBoxInventory + "', " +
                "@straps = '" + straps + "', " +
                "@wheelChocks = '" + wheelChocks + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Equipo de amarre actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    }
};

export default truckBoxInventoryMutations;