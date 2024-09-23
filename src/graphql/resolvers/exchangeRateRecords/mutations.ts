import { exchangeRateRecords } from "../../../db/Entities/exchangeRateRecords";

const exchangeRateRecordsMutations = {
    CREATE_EXCHANGE_RATE_RECORD: async (_: any, { input }: any) => {
        const {
            dateRate,
            exchangeRateDOF,
            exchangeRateSystem,
            userLoggedIn
        } = input;

        try {
            await exchangeRateRecords.query("exec create_exchangeRateRecord " +
                "@dateRate = '" + dateRate + "', " +
                "@exchangeRateDOF = '" + exchangeRateDOF + "', " +
                "@exchangeRateSystem = '" + exchangeRateSystem + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Tipo de cambio agregado " + dateRate;
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_EXCHANGE_RATE_RECORD: async (_: any, { input }: any) => {
        const {
            idExchangeRateRecord,
            dateRate,
            exchangeRateSystem,
            userLoggedIn
        } = input;

        try {
            await exchangeRateRecords.query("exec edit_exchangeRateRecord " +
                "@idExchangeRateRecord = '" + idExchangeRateRecord + "', " +
                "@dateRate = '" + dateRate + "', " +
                "@exchangeRateSystem = '" + exchangeRateSystem + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro editado con éxito";
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_EXCHANGE_RATE_RECORD: async (_: any, { input }: any) => {
        const {
            idExchangeRateRecord,
            userLoggedIn
        } = input;

        try {
            await exchangeRateRecords.query("exec delete_exchangeRateRecord " +
                "@idExchangeRateRecord = '" + idExchangeRateRecord + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado con éxito";
        } catch (error) {
            console.log(error);
        }
    },
};

export default exchangeRateRecordsMutations;