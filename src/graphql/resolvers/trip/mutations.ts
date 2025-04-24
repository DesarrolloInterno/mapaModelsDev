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
            isRefrigerated,
            typeCrossing,
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
                "@isRefrigerated = '" + isRefrigerated + "', " +
                "@typeCrossing = '" + typeCrossing + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idLoggedIn = '" + idLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_TRIP_FROM_TRIPS_2: async (_: any, {input}: any) => {
        const {
            idSalesFormat,
            legendOriginCollection,
            legendDestinationCollection,
            reference,
            proNumber,
            loadingDate ,
            deliveryDate,
            idUnit,
            idEmployee,
            idTruckBox,
            wheelChocks,
            straps,
            showCPImport,
            sealNumber,
            observations ,
            userLoggedIn,
            idLoggedIn,
            temperature,
            americanPortion,
	        crossingPortion,
	        mexicanPortion,
            countryOrigin,
            countryDestination
        } = input;

        try {
            const newRecord = await trip.query("exec create_trip2 " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@reference = '" + reference + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@wheelChocks = '" + wheelChocks + "', " +
                "@straps = '" + straps + "', " +
                "@showCPImport = '" + showCPImport + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idLoggedIn = '" + idLoggedIn + "', " +
                "@temperature = '" + temperature + "', " +
                "@americanPortion = '" + americanPortion + "', " +
                "@crossingPortion = '" + crossingPortion + "', " +
                "@mexicanPortion = '" + mexicanPortion + "', " +
                "@countryOrigin = '" + countryOrigin + "', " +
                "@countryDestination = '" + countryDestination + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_2: async (_: any, {input}: any) => {
        const {
            idTrip,
            idSalesFormat,
            legendOriginCollection,
            legendDestinationCollection,
            reference,
            proNumber,
            loadingDate ,
            deliveryDate,
            idUnit,
            idEmployee,
            idTruckBox,
            wheelChocks,
            straps,
            showCPImport,
            sealNumber,
            observations ,
            userLoggedIn,
            temperature,
            americanPortion,
	        crossingPortion,
	        mexicanPortion,
            countryOrigin,
            countryDestination
        } = input;

        try {
            const newRecord = await trip.query("exec update_trip2 " +
                "@idTrip = '" + idTrip + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@legendOriginCollection = '" + legendOriginCollection + "', " +
                "@legendDestinationCollection = '" + legendDestinationCollection + "', " +
                "@reference = '" + reference + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idEmployee = '" + idEmployee + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@wheelChocks = '" + wheelChocks + "', " +
                "@straps = '" + straps + "', " +
                "@showCPImport = '" + showCPImport + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@observations = '" + observations + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@temperature = '" + temperature + "', " +
                "@americanPortion = '" + americanPortion + "', " +
                "@crossingPortion = '" + crossingPortion + "', " +
                "@mexicanPortion = '" + mexicanPortion + "', " +
                "@countryOrigin = '" + countryOrigin + "', " +
                "@countryDestination = '" + countryDestination + "' "
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
            userLoggedIn,
            showCPImport
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
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@showCPImport = '" + showCPImport + "' "
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
            invoicingConcept,
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
            idTrip,
            taxRate
        } = input;
        try {
            await trip.query("exec update_tripAmounts " + 
                "@idTripAmounts = '"+idTripAmounts+
                "', @idInvoicingConcept = '"+idInvoicingConcept+
                "', @invoicingConcept = '"+invoicingConcept+
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
                "', @idTrip = '"+idTrip+
                "', @taxRate = '"+taxRate+"'"
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
    },
    UPDATE_TOTALWEIGHT_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn,
        } = input;

        try {
            await trip.query("exec update_totalWeight_tripProducts " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Peso total de viaje actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPLOAD_TEM_PRODUCTS_TRIP: async (_: any, {input}: any) => {
        const { 
            idSalesFormat,
            productName,
            productNameMessage,
            productCode,
            productCodeMessage,
            codeUnit,
            codeUnitMessage,
            cargoQuantity,
            cargoQuantityMessage,
            cargoWeight,
            cargoWeightMessage,
            weightUnit,
            hazardousMaterial,
            codeHazardousMaterial,
            codeHazardousMaterialMessage,
            codePackaging,
            codePackagingMessage,
            declarationNumber,
            declarationNumberMessage,
            tariffCode,
            tariffCodeMessage,
            foeringTradeUUID,
            foeringTradeUUIDMessage,
            userLoggedIn,
            documentTypeCode,
            documentTypeCodeMessage,
            materialTypeCode,
            materialTypeCodeMessage,
            materialDescription,
            materialDescriptionMessage,
            rfcImporter,
            rfcImporterMessage,
            cofeprisSector,
            cofeprisSectorMessage,
            activeIngredientName,
            activeIngredientNameMessage,
            chemicalName,
            chemicalNameMessage,
            genericProductName,
            genericProductNameMessage,
            distinctiveProductName,
            distinctiveProductNameMessage,
            companyNameMaker,
            companyNameMakerMessage,
            expirationDate,
            expirationDateMessage,
            medicationPackage,
            medicationPackageMessage,
            pharmaceuticalForm,
            pharmaceuticalFormMessage,
            specialConditionsTransport,
            specialConditionsTransportMessage,
            healthRegistryAuthorizationFolio,
            healthRegistryAuthorizationFolioMessage,
            importPermitFolio,
            importPermitFolioMessage,
            vucemImportFolio,
            vucemImportFolioMessage,
            chemicalAbstractsServiceNumber,
            chemicalAbstractsServiceNumberMessage,
            importCompanyName,
            importCompanyNameMessage,
            healthRegistrationNumberPesticidesFertilizers,
            healthRegistrationNumberPesticidesFertilizersMessage,
            manufacturerInformation,
            manufacturerInformationMessage,
            formulatorData,
            formulatorDataMessage,
            maquiladoraData,
            maquiladoraDataMessage,
            authorizedUse,
            authorizedUseMessage,
            excelRow,
            customsClearance,
            customsClearanceMessage,
            customsDocumentIdentifier,
            customsDocumentIdentifierMessage
        } = input;
        try {
            const newid = await trip.query("exec uploadTemExcelProductsTrip " +
            "@idSalesFormat = '"+ idSalesFormat +"', @productName = '"+ productName +"', @productNameMessage = '"+ productNameMessage +"', " +
            "@productCode = '"+ productCode +"', @productCodeMessage = '"+ productCodeMessage +"', @codeUnit = '"+ codeUnit +"', " +
            "@codeUnitMessage = '"+ codeUnitMessage +"', @cargoQuantity = '"+ cargoQuantity +"', @cargoQuantityMessage = '"+ cargoQuantityMessage +"', " +
            "@cargoWeight = '"+ cargoWeight +"', @cargoWeightMessage = '"+ cargoWeightMessage +"', @weightUnit = '"+ weightUnit +"', " +
            "@hazardousMaterial = '"+ hazardousMaterial +"', @codeHazardousMaterial = '"+ codeHazardousMaterial +"', " +
            "@codeHazardousMaterialMessage = '"+ codeHazardousMaterialMessage +"', @codePackaging = '"+ codePackaging +"', " +
            "@codePackagingMessage = '"+ codePackagingMessage +"', @declarationNumber = '"+ declarationNumber +"', " +
            "@declarationNumberMessage = '"+ declarationNumberMessage +"', @tariffCode = '"+ tariffCode +"', " +
            "@tariffCodeMessage = '"+ tariffCodeMessage +"', @foeringTradeUUID = '"+ foeringTradeUUID +"', " +
            "@foeringTradeUUIDMessage = '"+ foeringTradeUUIDMessage +"', @userLoggedIn = '"+ userLoggedIn +"', " +
            "@documentTypeCode = '"+ documentTypeCode +"', @documentTypeCodeMessage = '"+ documentTypeCodeMessage +"', " +
            "@materialTypeCode = '"+ materialTypeCode +"', @materialTypeCodeMessage = '"+ materialTypeCodeMessage +"', " +
            "@materialDescription = '"+ materialDescription +"', @materialDescriptionMessage = '"+ materialDescriptionMessage +"', " +
            "@rfcImporter = '"+ rfcImporter +"', @rfcImporterMessage = '"+ rfcImporterMessage +"', " +
            "@cofeprisSector = '"+ cofeprisSector +"', @cofeprisSectorMessage = '"+ cofeprisSectorMessage +"', " +
            "@activeIngredientName = '"+ activeIngredientName +"', @activeIngredientNameMessage = '"+ activeIngredientNameMessage +"', " +
            "@chemicalName = '"+ chemicalName +"', @chemicalNameMessage = '"+ chemicalNameMessage +"', " +
            "@genericProductName = '"+ genericProductName +"', @genericProductNameMessage = '"+ genericProductNameMessage +"', " +
            "@distinctiveProductName = '"+ distinctiveProductName +"', @distinctiveProductNameMessage = '"+ distinctiveProductNameMessage +"', " +
            "@companyNameMaker = '"+ companyNameMaker +"', @companyNameMakerMessage = '"+ companyNameMakerMessage +"', " +
            "@expirationDate = '"+ expirationDate +"', @expirationDateMessage = '"+ expirationDateMessage +"', " +
            "@medicationPackage = '"+ medicationPackage +"', @medicationPackageMessage = '"+ medicationPackageMessage +"', " +
            "@pharmaceuticalForm = '"+ pharmaceuticalForm +"', @pharmaceuticalFormMessage = '"+ pharmaceuticalFormMessage +"', " +
            "@specialConditionsTransport = '"+ specialConditionsTransport +"', @specialConditionsTransportMessage = '"+ specialConditionsTransportMessage +"', " +
            "@healthRegistryAuthorizationFolio = '"+ healthRegistryAuthorizationFolio +"', @healthRegistryAuthorizationFolioMessage = '"+ healthRegistryAuthorizationFolioMessage +"', " +
            "@importPermitFolio = '"+ importPermitFolio +"', @importPermitFolioMessage = '"+ importPermitFolioMessage +"', " +
            "@vucemImportFolio = '"+ vucemImportFolio +"', @vucemImportFolioMessage = '"+ vucemImportFolioMessage +"', " +
            "@chemicalAbstractsServiceNumber = '"+ chemicalAbstractsServiceNumber +"', @chemicalAbstractsServiceNumberMessage = '"+ chemicalAbstractsServiceNumberMessage +"', " +
            "@importCompanyName = '"+ importCompanyName +"', @importCompanyNameMessage = '"+ importCompanyNameMessage +"', " +
            "@healthRegistrationNumberPesticidesFertilizers = '"+ healthRegistrationNumberPesticidesFertilizers +"', " +
            "@healthRegistrationNumberPesticidesFertilizersMessage = '"+ healthRegistrationNumberPesticidesFertilizersMessage +"', " +
            "@manufacturerInformation = '"+ manufacturerInformation +"', @manufacturerInformationMessage = '"+ manufacturerInformationMessage +"', " +
            "@formulatorData = '"+ formulatorData +"', @formulatorDataMessage = '"+ formulatorDataMessage +"', " +
            "@maquiladoraData = '"+ maquiladoraData +"', @maquiladoraDataMessage = '"+ maquiladoraDataMessage +"', " +
            "@authorizedUse = '"+ authorizedUse +"', @authorizedUseMessage = '"+ authorizedUseMessage +"', " +
            "@excelRow = '"+ excelRow +"', @customsClearance = '"+ customsClearance +"', " +
            "@customsClearanceMessage = '"+ customsClearanceMessage +"', " +
            "@customsDocumentIdentifier = '"+ customsDocumentIdentifier +"', @customsDocumentIdentifierMessage = '"+ customsDocumentIdentifierMessage +"'");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_TRIP_CFDI: async (_: any, {input}: any) => {
        const {
            idTrip,
            UUID,
            dateCFDI,
            codStatus,
            satSeal,
            SATcertificateNumber,
            CFDIstamp,
            SATStamp,
            originalChain,
            LinkQR,
            xmlText,
            idCCP,
            userLoggedIn,
        } = input;

        try {
            await trip.query("exec update_trip_cfdi " +
                "@idTrip = '" + idTrip + "', " +
                "@UUID = '" + UUID + "', " +
                "@dateCFDI = '" + dateCFDI + "', " +
                "@codStatus = '" + codStatus + "', " +
                "@satSeal = '" + satSeal + "', " +
                "@SATcertificateNumber = '" + SATcertificateNumber + "', " +
                "@CFDIstamp = '" + CFDIstamp + "', " +
                "@SATStamp = '" + SATStamp + "', " +
                "@originalChain = '" + originalChain + "', " +
                "@LinkQR = '" + LinkQR + "', " +
                "@xmlText = '" + xmlText + "', " +
                "@idCCP = '"+idCCP+"', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'CFDI de traslado actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    CREATE_TRANSFERINVOCE: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn,
        } = input;

        try {
            const newid = await trip.query("exec create_transferInvoice " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
    SET_LINK_PDF_XML_TRANSFERINVOCE: async (_: any, {input}: any) => {
        const {
            idTrip,
            linkPDF,
            linkXML,
            userLoggedIn,
        } = input;

        try {
            await trip.query("exec set_link_pdf_xml_transferInvoice " +
                "@idTrip = '" + idTrip + "', " +
                "@linkPDF = '" + linkPDF + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos del traslado actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_DYNAMIC_TRAVELASSIGNMENT_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            idTripOrder,
            loadingDate,
            deliveryDate,
            sealNumber,
            temperature,
            proNumber,
            reference,
            isCrossing,
            userLoggedIn,
            idClient,
            idSalesFormat,
            idUnit,
            idTruckBox,
            idOperator
        } = input;

        try {
            await trip.query("exec update_dynamic_travelAssignment_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@loadingDate = '" + loadingDate + "', " +
                "@deliveryDate = '" + deliveryDate + "', " +
                "@sealNumber = '" + sealNumber + "', " +
                "@temperature = '" + temperature + "', " +
                "@proNumber = '" + proNumber + "', " +
                "@reference = '" + reference + "', " +
                "@isCrossing = '" + isCrossing + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idClient = '" + idClient + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@idOperator = '" + idOperator + "' "
            );
            return 'Orden de viaje actualizada correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    SET_TRIP_SETTLEMENT: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec set_trip_settlement " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRIPSTAMP_FROM_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            idCancellationCode,
            cancellationReasons,
            userLoggedIn
        } = input;

        try {
            await trip.query("exec delete_tripStamp_from_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idCancellationCode = '" + idCancellationCode + "', " +
                "@cancellationReasons = '" + cancellationReasons + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Timbre eliminado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_TRIPSTAMP0203_FROM_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            idCancellationCode,
            cancellationReasons,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec delete_tripStamp0203_from_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@idCancellationCode = '" + idCancellationCode + "', " +
                "@cancellationReasons = '" + cancellationReasons + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_TRIP_CANCEL_CFDI: async (_: any, {input}: any) => {
        const {
            idRelatedTripUUID,
            dateCancelCFDI,
            statusUUID,
            statusCancelCFDI,
            userLoggedIn,
        } = input;

        try {
            await trip.query("exec update_trip_cancel_cfdi " +
                "@idRelatedTripUUID = '" + idRelatedTripUUID + "', " +
                "@dateCancelCFDI = '" + dateCancelCFDI + "', " +
                "@statusUUID = '" + statusUUID + "', " +
                "@statusCancelCFDI = '" + statusCancelCFDI + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Acuse cancelación de traslado actualizado correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TOKENCANCEL_STAMPTRIP: async (_: any, {input}: any) => {
        const {
            idRelatedTripUUID,
            userLoggedIn,
        } = input;

        try {
            const newid = await trip.query("exec set_tokenCancel_stampTripUUID " +
                "@idRelatedTripUUID = '" + idRelatedTripUUID + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_ACUSE_RELATEDTRIPUUID: async (_: any, {input}: any) => {
        const {
            idRelatedTripUUID,
            linkXML,
            userLoggedIn,
        } = input;

        try {
            await trip.query("exec set_link_acuse_relatedTripUUID " +
                "@idRelatedTripUUID = '" + idRelatedTripUUID + "', " +
                "@linkXML = '" + linkXML + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Documentos de traslado actualizados correctamente'
        } catch (error) {
            console.log(error);
        }

    },
    SET_TRIP_AMOUNTS: async (_: any, {input}: any) => {
        const { 
            idTrip,
            idInvoicingConcept,
            invoicingConcept,
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
            taxRate
        } = input;
        try {
            await trip.query("exec set_tripAmounts " +
                "@idTrip = '" + idTrip + "', " +
                "@idInvoicingConcept = '" + idInvoicingConcept + "', " +
                "@invoicingConcept = '" + invoicingConcept + "', " +
                "@subtotal = '" + subtotal + "', " +
                "@idIVApercentage = '" + idIVApercentage + "', " +
                "@IVApercentage = '" + IVApercentage + "', " +
                "@IVA = '" + IVA + "', " +
                "@idRETpercentage = '" + idRETpercentage + "', " +
                "@RETpercentage = '" + RETpercentage + "', " +
                "@RET = '" + RET + "', " +
                "@totalAmount = '" + totalAmount + "', " +
                "@idSalesFormat = '" + idSalesFormat + "', " +
                "@codeMeasuringUnit = '" + codeMeasuringUnit + "', " +
                "@measuringUnit = '" + measuringUnit + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@taxRate = '" + taxRate + "' "
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_TRIP_AMOUNTS_BY_IDTRIP: async (_: any, {input}: any) => {
        const { 
            idTrip,
            userLoggedIn
        } = input;
        try {
            await trip.query("exec delete_tripAmounts_by_idTrip " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_NON_BILLABLE_TRIPS: async (_: any, {input}: any) => {
        const {
            idTrip,
            isNonBillable,
            userLoggedIn
        } = input;

        try {
            const newRecord = await trip.query("exec set_nonBillableTrips " +
                "@idTrip = '" + idTrip + "', " +
                "@isNonBillable = '" + isNonBillable + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    }
};

export default tripMutations;