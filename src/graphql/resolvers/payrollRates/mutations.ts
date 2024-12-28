import { payrollRates } from "../../../db/Entities/payrollRates";

const payrollRatesMutations = {
    CREATE_PAYROLL_RATE: async (_: any, {input}: any) => {
        const { 
            name,
            typeRate,
            kilometers,
            rate,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newid = await payrollRates.query("exec create_payrollRate " +
                "@name = '" + name + "', " +
                "@typeRate = '" + typeRate + "', " +
                "@kilometers = '"+ kilometers + "', " +
                "@rate = '"+ rate + "', " +
                "@userLoggedIn = '"+ userLoggedIn + "', " +
                "@idEnterprise = '"+ idEnterprise + "' ");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PAYROLL_RATE_STATE: async (_: any, {input}: any) => {
        const { 
            idPayrollRate,
            idState,
            state,
            stateCode,
            userLoggedIn,
            idEnterprise,
            payrollRateOrder,
            idPayrollRateState,
            status
        } = input;
        try {
            const newid = await payrollRates.query("exec create_payrollRateState " +
                "@idPayrollRate = '" + idPayrollRate + "', " +
                "@idState = '" + idState + "', " +
                "@state = '"+ state + "', " +
                "@stateCode = '"+ stateCode + "', " +
                "@userLoggedIn = '"+ userLoggedIn + "', " +
                "@idEnterprise = '"+ idEnterprise + "', " +
                "@payrollRateOrder = '"+ payrollRateOrder + "', " +
                "@idPayrollRateState = '"+ idPayrollRateState + "', " +
                "@status = '"+ status + "' ");            
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_PAYROLL_RATE: async (_: any, {input}: any) => {
        const {
            idPayrollRate,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await payrollRates.query("exec delete_payrollRate " +
                "@idPayrollRate = '" + idPayrollRate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_PAYROLL_RATE: async (_: any, {input}: any) => {
        const {
            name,
            typeRate,
            kilometers,
            rate,
            userLoggedIn,
            idEnterprise,
            idPayrollRate
        } = input;

        try {
            const newRecord = await payrollRates.query("exec update_payrollRate " +
                "@name = '" + name + "', " +
                "@typeRate = '" + typeRate + "', " +
                "@kilometers = '" + kilometers + "', " +
                "@rate = '" + rate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@idPayrollRate = '" + idPayrollRate + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
}

export default payrollRatesMutations;