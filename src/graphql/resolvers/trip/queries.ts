import { trip } from "../../../db/Entities/trip";

const tripQueries = {

    GET_ALL_TRIPFORCROSSING: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_tripsForCrossings @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips @status = '" + status + "', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_BY_ID_TRIP: async (_: any, {idTrip, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trip_by_idTrip @idTrip = '" + idTrip + "', @idEnterprise = '"+ idEnterprise +"'");
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
    },
    GET_ALL_TRIPS_FOR_TRIPS_TRACKING: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_tripsTracking @status = '" + status + "', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_FOR_TRIPS_TRACKING2: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_tripsTracking2 @status = '" + status + "', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPTRACKING_OBSERVATIONS: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_all_tripTracking_observations @idTrip = '" + idTrip + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPTRACKING_DOCUMENTS_BY_ID_TRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_trip_Documents_by_idTrip @idTrip = '" + idTrip + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_TRACKING_PICKUPS: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_tripTrackingPickups_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_CROSSING_TRIP_TRACKING: async (_: any, {status,idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_crossingTripsTracking @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SUPPLIERS_LETTER_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_suppliersLetter_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLEANING_LETTER_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_cleaningLetter_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_FUMIGATION_LETTER_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_fumigationLetter_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_HISTORY: async (_: any, {date1, date2, crossing, filterCheck, dateTypeFilter, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_trip_history @date1 = '"+ date1 +"', @date2 = '"+ date2 + "', @crossing = '"+crossing+"', @filterCheck = '"+filterCheck+"', @dateTypeFilter = '"+dateTypeFilter+"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_BY_CLIENT: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_by_client @date1 = '"+ date1 +"', @date2 = '"+ date2 + "', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRASFERINVOICE_BY_TOKEN: async (_: any, {token}: any) => {
        try{
            const encrypt = process.env.ENCRYPT;
            const result = await trip.query("exec get_transferInvoice_by_token @token = '"+ token +"', @encrypt = '"+encrypt+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_FOR_INVOICE: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_invoice @date1 = '"+ date1 +"', @date2 = '"+ date2 + "', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_FOR_SETTLEMENT: async (_: any, {date1, date2, tripType, settlementStatus, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_settlement @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @tripType = '"+ tripType +"', @settlementStatus = '"+ settlementStatus +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_LIST: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_list @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPSTAMP_FOR_CANCEL: async (_: any, {token}: any) => {
        try{
            const result = await trip.query("exec get_tripStamp_for_cancel " +
            "@token = '"+ token +"', " +
            "@encrypt = '"+process.env.ENCRYPT+"' "
            );
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANCELLED_TRIPS: async (_: any, {date1, date2, dateCancelled1, dateCancelled2, status, typeCancelled, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_cancelled_trips " +
            "@date1 = '"+ date1 +"', " +
            "@date2 = '"+ date2 +"', " +
            "@dateCancelled1 = '"+ dateCancelled1 +"', " +
            "@dateCancelled2 = '"+ dateCancelled2 +"', " +
            "@status = '"+ status +"', " +
            "@typeCancelled = '"+ typeCancelled +"', " +
            "@idEnterprise = '"+ idEnterprise +"' "
            );
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_FOR_DOCUMENT_DIGITIZATION: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_documentDigitization @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_NON_BILLABLE_TRIPS: async (_: any, {tripType, isNonBillable, date1, date2, idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_nonBillableTrips @tripType = '"+tripType+"', @isNonBillable = '"+ isNonBillable +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INFORMATION_TRIP_BY_ID: async (_: any, {idTrip}: any) => {
        try{
            const result = await trip.query("exec get_informationTrip_by_id @idTrip = '" + idTrip + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_FOR_TRIPS_TRACKING_LAST_WEEK: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_tripsTracking_last_week @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIPS_FOR_CROSSING_TRIPS_TRACKING_LAST_WEEK: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await trip.query("exec get_all_trips_for_crossingTripsTracking_last_week @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default tripQueries;