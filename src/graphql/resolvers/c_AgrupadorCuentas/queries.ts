import { c_AgrupadorCuentas } from "../../../db/Entities/c_AgrupadorCuentas";

const c_AgrupadorCuentasQueries = {
    GET_C_AGRUPADORCUENTAS: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_AgrupadorCuentas.query("exec get_all_c_AgrupadorCuentas @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTINGACCOUNTTYPE: async (_: any, {status}: any) => {
        try{
            const result = await c_AgrupadorCuentas.query("exec get_all_accountingAccountType @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTINGACCOUNLEVEL: async (_: any, {status}: any) => {
        try{
            const result = await c_AgrupadorCuentas.query("exec get_all_accountingAccountLevel @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTINGACCOUNTCOST: async (_: any, {status}: any) => {
        try{
            const result = await c_AgrupadorCuentas.query("exec get_all_accountingAccountCost @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTINGACCOUNTSUBTYPE: async (_: any, {status}: any) => {
        try{
            const result = await c_AgrupadorCuentas.query("exec get_all_accountingAccountSubtype @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTINGACCOUNTNATURE: async (_: any, {status}: any) => {
        try{
            const result = await c_AgrupadorCuentas.query("exec get_all_accountingAccountNature @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default c_AgrupadorCuentasQueries;