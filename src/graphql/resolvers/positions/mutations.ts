import { positions } from "../../../db/Entities/positions";

const positionsMutations = {
    SET_POSITION: async (_: any, {input}: any) => {
        const { 
            idEnterprise,
            reference,
            latitude,
            longitude,
            address,
            orientation,
            speed,
            gpsDate,
            deviceType,
            odometer,
            hourometer,
            heading,
            temperature,
            rmp,
            fuel,
            ignition,
            tokenTransaction,
            userLoggedIn
        } = input;
        try {
            const newRecord = await positions.query("exec set_position " +
                "@idEnterprise = '"+idEnterprise+"', " +
                "@reference = '"+reference+"', " +
                "@latitude = '"+latitude+"', " +
                "@longitude = '"+longitude+"', " +
                "@address = '"+address+"', " +
                "@orientation = '"+orientation+"', " +
                "@speed = '"+speed+"', " +
                "@gpsDate = '"+gpsDate+"', " +
                "@deviceType = '"+deviceType+"', " +
                "@odometer = '"+odometer+"', " +
                "@hourometer = '"+hourometer+"', " +
                "@heading = '"+heading+"', " +
                "@temperature = '"+temperature+"', " +
                "@rmp = '"+rmp+"', " +
                "@fuel = '"+fuel+"', " +
                "@ignition = '"+ignition+"', " +
                "@tokenTransaction = '"+tokenTransaction+"', " +
                "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default positionsMutations;