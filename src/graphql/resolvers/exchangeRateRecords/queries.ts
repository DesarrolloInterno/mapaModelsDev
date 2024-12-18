import { exchangeRateRecords } from "../../../db/Entities/exchangeRateRecords";

const exchangeRateRecordsQueries = {
    GET_ALL_EXCHANGE_RATE_RECORDS: async (_: any, {typeUser, date1, date2}: any) => {
        try{
            const result = await exchangeRateRecords.query("exec get_all_exchangeRateRecords @typeUser = '"+ typeUser +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_LAST_EXCHANGE_RATE_RECORDS: async (_: any, {}: any) => {
        try{
            const result = await exchangeRateRecords.query("exec get_lastExchangeRateRecord ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_EXCHANGE_RATE_INVOICE: async (_: any, {date}: any) => {
        try{
            const result = await exchangeRateRecords.query("exec get_exchangeRateRecord_invoice @date = '"+ date +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default exchangeRateRecordsQueries;