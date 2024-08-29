import { trip } from "../../../db/Entities/trip";

const tripMutations = {
    CREATE_TRIP_FROM_TRIPS: async (_: any, {input}: any) => {
        const {
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
            idSalesFormat,
            customsClearance,
            countryOrigin,
            countryDestination,
            idEmployee,
            idTruckBox,
            idUnit,
            taxes,
            userLoggedIn,
            idLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec create_trip " +
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
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@countryOrigin = '" + countryOrigin + "', " +
                "@countryDestination = '" + countryDestination + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@taxes = '" + taxes + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' " +
                "@idLoggedIn = '" + idLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
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
            name,
            idClient,
            idOrigin,
            idDestination,
            legendOriginCollection,
            legendDestinationCollection,
            kilometres,
            temperature,
            tripType,
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
            idSalesFormat,
            customsClearance,
            countryOrigin,
            countryDestination,
            numTrip,
            idEmployee,
            idTruckBox,
            idUnit,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec update_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@name = '" + name + "', " +
                "@idClient = '" + idClient + "', " +
                "@idOrigin = '" + idOrigin + "', " +
                "@idDestination = '" + idDestination + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@temperature = '" + temperature + "', " +
                "@tripType = '" + tripType + "', " +
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
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@customsClearance = '" + customsClearance + "', " +
                "@countryOrigin = '" + countryOrigin + "', " +
                "@countryDestination = '" + countryDestination + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idUnit = '" + idUnit + "', " +
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
            isReversible,
            idTrip
        } = input;
        try {
            await trip.query("exec update_tripBoothRoute " +
                "@idTripBoothRoute = '"+idTripBoothRoute+
                "', @idSalesFormat = '"+idSalesFormat+
                "', @idBoothRoute = '"+idBoothRoute+
                "', @type = '"+type+
                "', @routeOrder = '"+routeOrder+
                "', @userLoggedIn = '"+userLoggedIn+
                "', @status = '"+status+
                "', @isReversible = '"+isReversible+
                "', @idTrip = '"+idTrip+"'"
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
            status,
            idTrip
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
                "', @status = '"+status+
                "', @idTrip = '"+idTrip+"'"
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIP_AMOUNTS: async (_: any, {input}: any) => {
        const { 
            idTripAmounts,
            userLoggedIn,
            idTrip
        } = input;
        try {
            await trip.query("exec delete_tripAmounts_by_trip " + 
                "@idTripAmounts = '"+idTripAmounts+
                "', @userLoggedIn = '"+userLoggedIn+
                "', @idTrip = '"+idTrip+"'"
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIP_BOOTHROUTE: async (_: any, {input}: any) => {
        const { 
            idTripBoothRoute,
            userLoggedIn,
            idTrip
        } = input;
        try {
            await trip.query("exec delete_tripBoothRoute_by_trip " + 
                "@idTripBoothRoute = '"+idTripBoothRoute+
                "', @userLoggedIn = '"+userLoggedIn+
                "', @idTrip = '"+idTrip+"'"
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    }
};

export default tripMutations;