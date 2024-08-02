import { clientTravelOrderSafetyEquipment } from "../../../db/Entities/clientTravelOrderSafetyEquipment";


const clientTravelOrderSafetyEquipmentQueries = {
    GET_ALL_CLIENTTRAVELORDER_SAFETY_EQUIPMENT: async (_: any, {idClientTravelOrder, status}: any) => {
        try{
            const result = await clientTravelOrderSafetyEquipment.query("exec get_all_clientTravelOrderSafetyEquipment @idClientTravelOrder = '"+ idClientTravelOrder +"', @status = '" + status + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default clientTravelOrderSafetyEquipmentQueries;