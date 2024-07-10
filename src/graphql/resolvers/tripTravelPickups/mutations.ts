import { tripTravelPickups } from "../../../db/Entities/tripTravelPickups";

const tripTravelPickupsMutations = {

    CREATE_TRIP_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const { 
            idClientLocation,
            idTrip,
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
            await tripTravelPickups.query("exec create_tripTravelPickups " +
                "@idClientLocation = '"+ idClientLocation +"', @idTrip = '"+ idTrip +"', @idRowProduct = '"+ idRowProduct +"', " +
                "@kilometres = '"+ kilometres +"', @productQuantity = '"+ productQuantity +"', @productWeight = '"+ productWeight +"', " +
                "@measuringUnit = '"+ measuringUnit +"', @appointmentDate = '"+ appointmentDate +"', " +
                "@typeLoad = '"+ typeLoad +"', @userLoggedIn = '"+ userLoggedIn +"' ");
            return 'Parada de carga creada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default tripTravelPickupsMutations;