import { truckBoxes } from "../../../db/Entities/truckBoxes";

const truckBoxesMutations = {

    CREATE_TRUCKBOX: async (_: any, {input}: any) => {
        const {
			idOwner,
            idLine,
            economicNumber,
            status,
            location,
            serialNumber,
            unitType,
            brand,
            model,
            licensePlates,
            year,
            measurement,
            odometer,
            idCountry,
            country,
            idState,
            state,
            trailerTypes,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await truckBoxes.query("exec create_truckBox " +
                "@idOwner = '" + idOwner + "', "+
                "@idLine = '" + idLine + "', "+
                "@economicNumber = '" + economicNumber + "', "+
                "@status = '" + status + "', "+
                "@location = '" + location + "', "+
                "@serialNumber = '" + serialNumber + "', "+
                "@unitType = '" + unitType + "', "+
                "@brand = '" + brand + "', "+
                "@model = '" + model + "', "+
                "@licensePlates = '" + licensePlates + "', "+
                "@year = '" + year + "', "+
                "@measurement = '" + measurement + "', "+
                "@odometer = '" + odometer + "', "+
                "@idCountry = '" + idCountry + "', "+
                "@country = '" + country + "', "+
                "@idState = '" + idState + "', "+
                "@state = '" + state + "', "+
                "@trailerTypes = '" + trailerTypes + "', "+
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRUCKBOX: async (_: any, {input}: any) => {
        const {
            idTruckBox,
            idOwner,
            idLine,
            economicNumber,
            status,
            location,
            serialNumber,
            unitType,
            brand,
            model,
            licensePlates,
            year,
            measurement,
            odometer,
            idCountry,
            country,
            idState,
            state,
            trailerTypes,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await truckBoxes.query("exec update_truckBox " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOwner = '" + idOwner + "', " +
                "@idLine = '" + idLine + "', " +
                "@economicNumber = '" + economicNumber + "', " +
                "@status = '" + status + "', " +
                "@location = '" + location + "', " +
                "@serialNumber = '" + serialNumber + "', " +
                "@unitType = '" + unitType + "', " +
                "@brand = '" + brand + "', " +
                "@model = '" + model + "', " +
                "@licensePlates = '" + licensePlates + "', " +
                "@year = '" + year + "', " +
                "@measurement = '" + measurement + "', " +
                "@odometer = '" + odometer + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@country = '" + country + "', " +
                "@idState = '" + idState + "', " +
                "@state = '" + state + "', " +
                "@trailerTypes = '" + trailerTypes + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRUCKBOX: async (_: any, {input}: any) => {
        const {
            idTruckBox,
            userLoggedIn
        } = input;

        try {
            await truckBoxes.query("exec delete_truckBox " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    }
};

export default truckBoxesMutations;