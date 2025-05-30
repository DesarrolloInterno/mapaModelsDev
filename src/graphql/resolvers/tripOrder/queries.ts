import { tripOrder } from "../../../db/Entities/tripOrder";

const tripOrderQueries = {
    GET_ALL_TRIP_ORDER: async (_: any, {typeFilter, date, date1, date2, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_tripOrder @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_CROSSING_TRIP_ORDER: async (_: any, {typeFilter, date, date1, date2, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_crossing_tripOrder @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SAFETY_EQUIPMENT_TRIP_ORDER: async (_: any, {idTripOrder}: any) => {
        try{
            const result = await tripOrder.query("exec get_safetyEquipment_by_idTripOrder @idTripOrder = '"+ idTripOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_VALIDATED_TRIP_ORDERS: async (_: any, {typeFilter, date, date1, date2}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_validated_tripOrders @typeFilter = '"+ typeFilter +"', @date = '"+ date +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_ORDER_BY_ID_TRIP_ORDER: async (_: any, {idTripOrder, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_tripOrder_by_idTripOrder @idTripOrder = '"+ idTripOrder +"', @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_ORDER_AMOUNTS_BY_ID_TRIP_ORDER: async (_: any, {idTripOrder}: any) => {
        try{
            const result = await tripOrder.query("exec get_tripOrderAmounts_by_idTripOrder @idTripOrder = '"+ idTripOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_ORDER_FOR_CROSSING: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_tripOrderForCrossings @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_TRIP_ORDER_CUSTOMS_CLEARANCE: async (_: any, {idTripOrder}: any) => {
        try{
            const result = await tripOrder.query("exec get_all_tripOrder_customsClearance @idTripOrder = '"+ idTripOrder +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default tripOrderQueries;