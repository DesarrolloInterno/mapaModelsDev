import { salesFormat } from "../../../db/Entities/salesFormat";

const salesFormatQueries = {

    GET_SALES_FORMAT: async (_: any, {status, tripType}: any) => {
        try{
            const result = await salesFormat.query("exec get_all_salesFormat @status = '"+ status +"', @tripType = '"+ tripType +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SALES_FORMAT_BY_ID: async (_: any, {idSalesFormat}: any) => {
        try{
            const result = await salesFormat.query("exec get_salesFormat_by_id @idSalesFormat = '"+ idSalesFormat +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SALES_FORMAT_BY_TRIPTYPE: async (_: any, {tripType}: any) => {
        try{
            const result = await salesFormat.query("exec get_salesFormats_by_tripType @tripType = '"+ tripType +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CROSS_SALES_FORMAT: async (_: any, {}: any) => {
        try{
            const result = await salesFormat.query("exec get_cross_salesFormats ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_BOOTHROUTES_BY_ID_SALESFORMAT: async (_: any, {idSalesFormat}: any) => {
        try{
            const result = await salesFormat.query("exec get_boothRoute_by_idSalesFormat @idSalesFormat = '"+ idSalesFormat +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_BOOTHROUTES_BY_ID_AMOUNTS: async (_: any, {idSalesFormat}: any) => {
        try{
            const result = await salesFormat.query("exec get_salesFormatAmounts_by_id @idSalesFormat = '"+ idSalesFormat +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DOCUMENTPROOFDELIVERY_BY_ID_SALESFORMAT: async (_: any, {idSalesFormat}: any) => {
        try{
            const result = await salesFormat.query("exec get_documentsProofDelivery_by_idSalesFormat @idSalesFormat = '"+ idSalesFormat +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SAFETYEQUIPMENT_BY_ID_SALESFORMAT: async (_: any, {idSalesFormat}: any) => {
        try{
            const result = await salesFormat.query("exec get_safetyEquipment_by_idSalesFormat @idSalesFormat = '"+ idSalesFormat +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SALES_FORMAT_BY_CLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await salesFormat.query("exec get_salesFormats_by_client @idClient = '"+ idClient +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_SALES_FORMAT_BY_CLIENT_AND_TRIP_TYPE: async (_: any, {idClient, tripType}: any) => {
        try{
            const result = await salesFormat.query("exec get_salesFormats_by_client_and_tripType @idClient = '"+ idClient +"', @tripType = '"+ tripType +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default salesFormatQueries;