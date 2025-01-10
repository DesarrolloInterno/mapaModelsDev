import { payrollRates } from "../../../db/Entities/payrollRates";

const payrollRatesQueries = {

    GET_ALL_PAYROLL_RATES: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await payrollRates.query("exec get_all_payrollRates @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_PAYROLL_RATE_STATES: async (_: any, {idPayrollRate, idEnterprise}: any) => {
        try{
            const result = await payrollRates.query("exec get_all_payrollRateStates @idPayrollRate = '"+ idPayrollRate +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    }
};

export default payrollRatesQueries;