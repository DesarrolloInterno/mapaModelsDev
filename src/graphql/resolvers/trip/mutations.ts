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
    },
    CREATE_TRIPTRACKING_OBSERVATIONS: async (_: any, {input}: any) => {
        const {
            idTrip,
            observations,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec create_tripTracking_observations " +
                "@idTrip = '" + idTrip + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIPTRACKING_OBSERVATIONS: async (_: any, {input}: any) => {
        const {
            idTripTrackingObservations,
            observations,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec update_tripTracking_observations " +
                "@idTripTrackingObservations = '" + idTripTrackingObservations + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIPTRACKING_OBSERVATIONS: async (_: any, {input}: any) => {
        const {
            idTripTrackingObservations,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec delete_tripTracking_observations " +
                "@idTripTrackingObservations = '" + idTripTrackingObservations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_OBSERVATIONS: async (_: any, {input}: any) => {
        const {
            idTrip,
			observations,
            userLoggedIn
        } = input;

        try {
            await trip.query("exec update_trip_observations " +
                "@idTrip = '" + idTrip + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Observaciones de viaje actualizadas correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TRIP_DOCUMENT: async (_: any, {input}: any) => {
        const { idTrip, userLoggedIn, comments } = input;
        try {
            const newRecord = await trip.query("exec set_tripDocument @idTrip = '"+idTrip+"', @userLoggedIn = '"+userLoggedIn+"', @comments = '"+comments+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_TRIP_DOCUMENT: async (_: any, {input}: any) => {
        const { idDocument, link, document, userLoggedIn } = input;
        try {
            await trip.query("exec set_linkTripDocument @idDocument = '"+idDocument+"', @link = '"+link+"', @document = '"+document+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_DOCUMENT: async (_: any, {input}: any) => {
        const { idTripDocument, idTrip, documentLink, userLoggedIn, comments, nameDocument } = input;
        try {
            await trip.query("exec update_tripDocuments @idTripDocument = '"+idTripDocument+"', @idTrip = '"+idTrip+"', @documentLink = '"+documentLink+"', @userLoggedIn = '"+userLoggedIn+"', @comments = '"+comments+"', @nameDocument = '"+nameDocument+"' ");
            return 'Documento actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_TRACKING_DYNAMIC: async (_: any, {input}: any) => {
        const { 
            idTrip, 
            loadingDate,
            orderDate,
            inGateDate,
            documentDeliveryDate,
            startTripDate,
            deliveryDate,
            departureDate,
            observations,
            userLoggedIn
        } = input;
        try {
            await trip.query("exec update_tripTracking_dynamic @idTrip = '"+idTrip+
                "', @loadingDate = '"+loadingDate+
                "', @orderDate = '"+orderDate+
                "', @inGateDate = '"+inGateDate+
                "', @documentDeliveryDate = '"+documentDeliveryDate+
                "', @startTripDate = '"+startTripDate+
                "', @deliveryDate = '"+deliveryDate+
                "', @departureDate = '"+departureDate+
                "', @observations = '"+observations+
                "', @userLoggedIn = '"+userLoggedIn+
                "' ");
            return 'Se actualizó correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP_TRACKING_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const {
            idClientLocation,
            idTrip,
            idRowProduct,
            kilometres,
            productQuantity,
            productWeight,
            measuringUnit,
            appointmentDate,
            typeLoad,
            arrivalDate,
            userLoggedIn
        } = input;

        try {
            await trip.query("exec create_tripTrackingPickups " +
                "@idClientLocation = '" + idClientLocation + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@idRowProduct = '" + idRowProduct + "', " +
                "@kilometres = '" + kilometres + "', " +
                "@productQuantity = '" + productQuantity + "', " +
                "@productWeight = '" + productWeight + "', " +
                "@measuringUnit = '" + measuringUnit + "', " +
                "@appointmentDate = '" + appointmentDate + "', " +
                "@typeLoad = '" + typeLoad + "', " +
                "@arrivalDate = '" + arrivalDate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Recolección agregada correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_TRACKING_TRAVEL_PICKUPS: async (_: any, {input}: any) => {
        const {
            idTripTravelPickup,
            appointmentDate,
            arrivalDate,
            userLoggedIn
        } = input;

        try {
            await trip.query("exec update_tripTrackingPickups " +
                "@idTripTravelPickup = '" + idTripTravelPickup + "', " +
                "@appointmentDate = '" + appointmentDate + "', " +
                "@arrivalDate = '" + arrivalDate + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Recolección actualizada correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default tripMutations;