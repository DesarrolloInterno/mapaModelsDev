import { tripAdvance } from "../../../db/Entities/tripAdvance";

const tripAdvanceQueries = {
    GET_TRIPADVANCE: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await tripAdvance.query("exec get_all_tripAdvance @status = '"+ status +"', @date1 = '"+date1+"', @date2 = '"+date2+"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPADVANCES: async (_: any, {date1, date2, idEnterprise, typeFilter}: any) => {
        try{
            const result = await tripAdvance.query("exec get_tripAdvances @date1 = '"+date1+"', @date2 = '"+date2+"', @idEnterprise = '"+ idEnterprise +"', @typeFilter = '"+ typeFilter + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPADVANCES_BY_IDTRIP: async (_: any, {idTrip, idEnterprise}: any) => {
        try{
            const result = await tripAdvance.query("exec get_all_tripAdvances_by_idTrip @idTrip = '"+idTrip+"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPADVANCES_FOR_CROSSING_TRIPS: async (_: any, {date1, date2, idEnterprise, typeFilter}: any) => {
        try{
            const result = await tripAdvance.query("exec get_tripAdvances_for_crossingTrips @date1 = '"+date1+"', @date2 = '"+date2+"', @idEnterprise = '"+ idEnterprise +"', @typeFilter = '"+ typeFilter + "'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default tripAdvanceQueries;