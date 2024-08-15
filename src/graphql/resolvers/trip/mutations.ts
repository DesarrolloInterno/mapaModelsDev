import { trip } from "../../../db/Entities/trip";

const tripMutations = {
    UPDATE_TRIP_TRIPASSIGNMENT: async (_: any, {input}: any) => {
        const {
            idTripOrder ,
            idUnit,
            idEmployee,
            idTruckBox,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec update_trip_tripAssignment " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            idTripOrder,
            name,
            idClient,
            idOrigin,
            idDestination,
            legendOriginCollection,
            legendDestinationCollection,
            travelClassification,
            kilometres,
            travelTime,
            temperature,
            tripType,
            currencye,
            observations,
            fullAddressOrigin,
            fullAddressDestination,
            americanPortion,
            crossingPortion,
            mexicanPortion,
            currency,
            loadingDate,
            deliveryDate,
            sealNumber,
            proNumber,
            wheelChocks,
            straps,
            reference,
            orderDate,
            idSalesFormat,
            numTripOrder,
            customsClearance,
            countryOrigin,
            countryDestination,
            idTripOrigin,
            numTrip,
            idEmployee,
            idTruckBox,
            idUnit,
            numTripOrigin,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec update_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idTripOrder = '" + idTripOrder + "', " +
                "@name = '" + name + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@travelClassification = '" + travelClassification + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@travelTime = '" + travelTime + "', " +
                "@temperature = '" + temperature + "', " +
                "@tripType = '" + tripType + "', " +
                "@currencye = '" + currencye + "', " +
                "@observations = '" + observations + "', " +
                "@fullAddressOrigin = '" + fullAddressOrigin + "', " +
                "@fullAddressDestination = '" + fullAddressDestination + "', " +
                "@americanPortion = '" + americanPortion + "', " +
                "@crossingPortion = '" + crossingPortion + "', " +
                "@mexicanPortion = '" + mexicanPortion + "', " +
                "@currency = '" + currency + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@wheelChocks = '" + wheelChocks + "', " +
                "@straps = '" + straps + "', " +
                "@reference = '" + reference + "', " +
                "@orderDate = '" + orderDate + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@numTripOrder = '" + numTripOrder + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@countryOrigin = '" + countryOrigin + "', " +
                "@countryDestination = '" + countryDestination + "', " +
                "@idTripOrigin = '" + idTripOrigin + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@numTripOrigin = '" + numTripOrigin + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_BOOTHROUTE: async (_: any, {input}: any) => {
        const { 
            idTripBoothRoute,
            idSalesFormat,
            idBoothRoute,
            type,
            routeOrder,
            userLoggedIn,
            status,
            isReversible
        } = input;
        try {
            await trip.query("exec update_salesFormatBoothRoute " +
                "@idTripBoothRoute = '"+idTripBoothRoute+
                "', @idSalesFormat = '"+idSalesFormat+
                "', @idBoothRoute = '"+idBoothRoute+
                "', @type = '"+type+
                "', @routeOrder = '"+routeOrder+
                "', @userLoggedIn = '"+userLoggedIn+
                "', @status = '"+status+
                "', @isReversible = '"+isReversible+"'"
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_AMOUNTS: async (_: any, {input}: any) => {
        const { 
            idTripAmounts,
            idInvoicingConcept,
            subtotal,
            idIVApercentage,
            IVApercentage,
            IVA,
            idRETpercentage,
            RETpercentage,
            RET,
            totalAmount,
            idSalesFormat,
            codeMeasuringUnit,
            measuringUnit,
            userLoggedIn,
            status
        } = input;
        try {
            await trip.query("exec update_tripAmounts " + 
                "@idTripAmounts = '"+idTripAmounts+
                "', @idInvoicingConcept = '"+idInvoicingConcept+
                "', @subtotal = '"+subtotal+
                "', @idIVApercentage = '"+idIVApercentage+
                "', @IVApercentage = '"+IVApercentage+
                "', @IVA = '"+IVA+
                "', @idRETpercentage = '"+idRETpercentage+
                "', @RETpercentage = '"+RETpercentage+
                "', @RET = '"+RET+
                "', @totalAmount = '"+totalAmount+
                "', @idSalesFormat = '"+idSalesFormat+
                "', @codeMeasuringUnit = '"+codeMeasuringUnit+
                "', @measuringUnit = '"+measuringUnit+
                "', @userLoggedIn = '"+userLoggedIn+
                "', @status = '"+status+"' "
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    }
};

export default tripMutations;