import { tripOrder } from "../../../db/Entities/tripOrder";

const travelAssignmentQueries = {
    GET_ALL_TRAVEL_ASSIGNMENT: async (_: any, {typeFilter, date, date1, date2, tripFilter, dateTypeFilter, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_travelAssignment @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @tripFilter = '"+ tripFilter +"', @dateTypeFilter = '"+ dateTypeFilter +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRAVEL_ASSIGNMENT_CROSSING: async (_: any, {typeFilter, date, date1, date2, tripFilter, dateTypeFilter, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_travelAssignment_crossing @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @tripFilter = '"+ tripFilter +"', @dateTypeFilter = '"+ dateTypeFilter +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRAVEL_ASSIGNMENT_TRIP: async (_: any, {typeFilter, date, date1, date2, dateTypeFilter, idEnterpriseLoggedIn}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_travelAssignment_trip @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @dateTypeFilter = '"+ dateTypeFilter +"', @idEnterpriseLoggedIn = '"+ idEnterpriseLoggedIn +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRAVEL_ASSIGNMENT_TRIP_CROSSING: async (_: any, {typeFilter, date, date1, date2, dateTypeFilter, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_travelAssignment_trip_crossing @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @dateTypeFilter = '"+ dateTypeFilter +"', @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SAFETY_EQUIPMENT_TRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await tripOrder.query("exec get_safetyEquipment_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_PRODUCTS_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await tripOrder.query("exec get_tripProducts_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_CUSTOMS_CLEARANCE: async (_: any, {idTrip}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_trip_customsClearance @idTrip = '"+ idTrip +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default travelAssignmentQueries;