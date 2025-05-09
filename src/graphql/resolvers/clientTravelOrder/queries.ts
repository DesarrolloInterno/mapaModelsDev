import { clientTravelOrder } from "../../../db/Entities/clientTravelOrder";

const clientTravelOrderQueries = {
    GET_CLIENT_TRAVEL_ORDERS: async (_: any, {date1, date2, idClient}: any) => {
        try{
            const result = await clientTravelOrder.query("exec get_all_client_travel_orders @date1 = '"+date1+"', @date2 = '"+date2+"', @idClient = '"+idClient+"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_SALES_FORMAT_AMOUNTS: async (_: any, {idClient}: any) => {
        try{
            const result = await clientTravelOrder.query("exec get_clientSalesFormatAmounts @idClient = '"+idClient+"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_ADDRESSES: async (_: any) => {
        try{
            const result = await clientTravelOrder.query("exec get_all_clientAddresses");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENTS_CLIENT_TRAVEL_ORDERS: async (_: any, {date1, date2, status, idEnterprise}: any) => {
        try{
            const result = await clientTravelOrder.query("exec get_all_clients_clientTravelOrders @date1 = '"+date1+"', @date2 = '"+date2+"', @status = '"+status+"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENTTRAVELORDER_BY_ID: async (_: any, {idClientTravelOrder, idEnterprise}: any) => {
        try{
            const result = await clientTravelOrder.query("exec get_all_clients_clientTravelOrders_by_id @idClientTravelOrder = '"+ idClientTravelOrder +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_CLIENT_TRAVEL_ORDER_CUSTOMS_CLEARANCE: async (_: any, {idClientTravelOrder}: any) => {
        try{
            const result = await clientTravelOrder.query("exec get_all_clientTravelOrder_customsClearance @idClientTravelOrder = '"+ idClientTravelOrder +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default clientTravelOrderQueries;