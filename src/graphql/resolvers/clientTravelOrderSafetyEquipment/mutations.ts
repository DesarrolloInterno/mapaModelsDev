import { clientTravelOrderSafetyEquipment } from "../../../db/Entities/clientTravelOrderSafetyEquipment";


const clientTravelOrderSafetyEquipmentMutations = {
    CREATE_CLIENTTRAVELORDER_SAFETY_EQUIPMENT: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            name,
            description,
            userLoggedIn
        } = input;

        try {
            const newRecord = await clientTravelOrderSafetyEquipment.query("exec create_clientTravelOrderSafetyEquipment " +
            "@idClientTravelOrder = '"+idClientTravelOrder+"', " +
            "@name = '"+name+"', " +
            "@description = '"+description+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENTTRAVELORDER_SAFETY_EQUIPMENT: async (_: any, {input}: any) => {
        const {
            idClientTravelOrderSafetyEquipment,
            idClientTravelOrder,
			name,
            description,
            userLoggedIn
        } = input;

        try {
            const newRecord = await clientTravelOrderSafetyEquipment.query("exec update_clientTravelOrderSafetyEquipment " +
                "@idClientTravelOrderSafetyEquipment = '" + idClientTravelOrderSafetyEquipment + "', " +
                "@idClientTravelOrder = '" + idClientTravelOrder + "', " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_CLIENTTRAVELORDER_SAFETY_EQUIPMENT: async (_: any, {input}: any) => {
        const {
            idClientTravelOrderSafetyEquipment,
            userLoggedIn
        } = input;

        try {
            await clientTravelOrderSafetyEquipment.query("exec delete_clientTravelOrderSafetyEquipment " +
                "@idClientTravelOrderSafetyEquipment = '" + idClientTravelOrderSafetyEquipment + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    }
}

export default clientTravelOrderSafetyEquipmentMutations;