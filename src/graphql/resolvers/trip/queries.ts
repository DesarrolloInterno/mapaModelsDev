import { trip } from "../../../db/Entities/trip";

const tripQueries = {

    GET_ALL_TRIPFORCROSSING: async (_: any, {date1, date2}: any) => {
        try{
            const result = await trip.query("exec get_all_tripsForCrossings @date1 = '"+ date1 +"', @date2 = '"+ date2 +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS: async (_: any, {status, date1, date2}: any) => {
        try{
            const result = await trip.query("exec get_all_trips @status = '" + status + "', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_BY_ID_TRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_all_trip_by_idTrip @idTrip = '" + idTrip + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INSTRUCTION_LETTER_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_instructionLetter_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

GET_BOOTHROUTE_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_boothRoutes_trip_byIdTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

GET_TRIPSAFETYEQUIPMENT_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_tripSafetyEquipment_byIdTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

GET_TRANSPORTDOCUMENT: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_transportDocument @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

    GET_TRIPAMOUNTS: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_trip_amounts @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPBOOTHROUTE_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_tripBoothRoute_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPAMOUNTS_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_tripAmounts_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default tripQueries;