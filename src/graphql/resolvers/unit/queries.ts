import { unit } from "../../../db/Entities/unit";

const unitQueries = {
    GET_UNIT: async (_: any, {status}: any) => {
        try{
            const result = await unit.query("exec get_all_unit @status = '"+ status +"' ");
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
    GET_UNIT_NO_RETIRED: async (_: any) => {
        try{
            const result = await unit.query("exec get_all_unit_with_out_retired");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACTIVE_UNITS_WITH_ACTIVE_OPERATORS: async (_: any) => {
        try{
            const result = await unit.query("exec get_all_activeUnits_with_active_operators");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default unitQueries;