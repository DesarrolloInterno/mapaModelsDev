import { tripOrderTravelPickups } from "../../../db/Entities/tripOrderTravelPickups";

const tripOrderTravelPickupsMutations = {

    CREATE_TRIP_ORDER_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            idClientLocation,
            idTripOrder,
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
            const newid = await tripOrderTravelPickups.query("exec create_tripOrderTravelPickups " +
                "@idClientLocation = '"+ idClientLocation +"', @idTripOrder = '"+ idTripOrder +"', @idRowProduct = '"+ idRowProduct +"', " +
                "@kilometres = '"+ kilometres +"', @productQuantity = '"+ productQuantity +"', @productWeight = '"+ productWeight +"', " +
                "@measuringUnit = '"+ measuringUnit +"', @appointmentDate = '"+ appointmentDate +"', " +
                "@typeLoad = '"+ typeLoad +"', @userLoggedIn = '"+ userLoggedIn +"' ");
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_ORDER_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            idTripOrderTravelPickup,
            idClientLocation,
            idTripOrder,
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
            await tripOrderTravelPickups.query("exec update_tripOrderTravelPickups " +
                "@idTripOrderTravelPickup = '"+ idTripOrderTravelPickup +"', @idClientLocation = '"+ idClientLocation +"', " +
                "@idTripOrder = '"+ idTripOrder +"', @idRowProduct = '"+ idRowProduct +"', " +
                "@kilometres = '"+ kilometres +"', @productQuantity = '"+ productQuantity +"', @productWeight = '"+ productWeight +"', " +
                "@measuringUnit = '"+ measuringUnit +"', @appointmentDate = '"+ appointmentDate +"', " +
                "@typeLoad = '"+ typeLoad +"', @userLoggedIn = '"+ userLoggedIn +"', @status = '"+ status +"' ");

            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default tripOrderTravelPickupsMutations;