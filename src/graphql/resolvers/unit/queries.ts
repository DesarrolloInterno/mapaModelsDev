import { unit } from "../../../db/Entities/unit";

const unitQueries = {
    GET_UNIT: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await unit.query("exec get_all_unit @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_UNIT_DOCUMENTS: async (_: any, {idUnit}: any) => {
        try{
            const result = await unit.query("exec get_unitDocuments @idUnit = '"+ idUnit +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_UNIT_NO_RETIRED: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await unit.query("exec get_all_unit_with_out_retired @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACTIVE_UNITS_WITH_ACTIVE_OPERATORS: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await unit.query("exec get_all_activeUnits_with_active_operators @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_BAFAR_UNITS: async (_: any, {}: any) => {
        try{
            const result = await unit.query("exec get_all_bafar_units");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default unitQueries;