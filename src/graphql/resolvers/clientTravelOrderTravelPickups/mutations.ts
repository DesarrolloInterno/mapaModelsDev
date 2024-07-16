import { clientTravelOrderTravelPickups } from "../../../db/Entities/clientTravelOrderTravelPickups";

const clientTravelOrderTravelPickupsMutations = {

    CREATE_CLIENT_TRAVEL_ORDER_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            idClientLocation,
            idClientTravelOrder,
            idRowProduct,
            kilometres,
            productQuantity,
            productWeight,
            measuringUnit,
            appointmentDate,
            typeLoad,
            userLoggedIn
        } = input;
        try {
            const newid = await clientTravelOrderTravelPickups.query("exec create_clientTravelOrderTravelPickups " +
                "@idClientLocation = '"+ idClientLocation +"', @idClientTravelOrder = '"+ idClientTravelOrder +"', @idRowProduct = '"+ idRowProduct +"', " +
                "@kilometres = '"+ kilometres +"', @productQuantity = '"+ productQuantity +"', @productWeight = '"+ productWeight +"', " +
                "@measuringUnit = '"+ measuringUnit +"', @appointmentDate = '"+ appointmentDate +"', " +
                "@typeLoad = '"+ typeLoad +"', @userLoggedIn = '"+ userLoggedIn +"' ");
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_TRAVEL_ORDER_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            idClientTravelOrderTravelPickup,
            idClientLocation,
            idClientTravelOrder,
            idRowProduct,
            kilometres,
            productQuantity,
            productWeight,
            measuringUnit,
            appointmentDate,
            typeLoad,
            userLoggedIn,
            status
        } = input;
        try {
            await clientTravelOrderTravelPickups.query("exec update_clientTravelOrderTravelPickups " +
                "@idClientTravelOrderTravelPickup = '"+ idClientTravelOrderTravelPickup +"', @idClientLocation = '"+ idClientLocation +"', " +
                "@idClientTravelOrder = '"+ idClientTravelOrder +"', @idRowProduct = '"+ idRowProduct +"', " +
                "@kilometres = '"+ kilometres +"', @productQuantity = '"+ productQuantity +"', @productWeight = '"+ productWeight +"', " +
                "@measuringUnit = '"+ measuringUnit +"', @appointmentDate = '"+ appointmentDate +"', " +
                "@typeLoad = '"+ typeLoad +"', @userLoggedIn = '"+ userLoggedIn +"', @status = '"+ status +"' ");

            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    SET_ID_CLIENT_TRAVEL_ORDER_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            id,
            idClientTravelOrder, 
        } = input;
        try {
            await clientTravelOrderTravelPickups.query("exec set_id_clientTravelOrderTravelPickups @id = '"+ id +"', @idClientTravelOrder = '"+ idClientTravelOrder +"' ");

            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    }
};

export default clientTravelOrderTravelPickupsMutations;