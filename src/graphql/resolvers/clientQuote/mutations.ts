import { clientQuote } from "../../../db/Entities/clientQuote";

const clientQuoteMutations = {
    CREATE_CLIENT_QUOTE: async (_: any, {input}: any) => {
        const { 
            idEnterprise,
            idUser,
            idEmployee,
            businessNameDestination,
            phoneDestination,
            contactPersonNameDestination,
            contactPersonMailNameDestination,
            date,
            effectiveStartDate,
            effectiveEndDate,
            name,
            userLoggedIn,
            contactPersonPhone
        } = input;
        try {
            const newRecord = await clientQuote.query("exec create_clientQuote @idEnterprise = '"+idEnterprise+"', @idUser = '"+idUser+"', @idEmployee = '"+idEmployee+"', @businessNameDestination = '"+businessNameDestination+"', @phoneDestination = '"+phoneDestination+"', @contactPersonNameDestination = '"+contactPersonNameDestination+"', @contactPersonMailNameDestination = '"+contactPersonMailNameDestination+"', @date = '"+date+"', @effectiveStartDate = '"+effectiveStartDate+"', @effectiveEndDate = '"+effectiveEndDate+"', @name = '"+name+"', @userLoggedIn = '"+userLoggedIn+"', @contactPersonPhone = '"+contactPersonPhone+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_QUOTE: async (_: any, {input}: any) => {
        const { 
            idClientQuote,
            idEnterprise,
            idUser,
            idEmployee,
            businessNameDestination,
            phoneDestination,
            contactPersonNameDestination,
            contactPersonMailNameDestination,
            date,
            effectiveStartDate,
            effectiveEndDate,
            name,
            userLoggedIn,
            contactPersonPhone
        } = input;
        try {
            await clientQuote.query("exec update_clientQuote @idClientQuote = '"+idClientQuote+"', @idEnterprise = '"+idEnterprise+"', @idUser = '"+idUser+"', @idEmployee = '"+idEmployee+"', @businessNameDestination = '"+businessNameDestination+"', @phoneDestination = '"+phoneDestination+"', @contactPersonNameDestination = '"+contactPersonNameDestination+"', @contactPersonMailNameDestination = '"+contactPersonMailNameDestination+"', @date = '"+date+"', @effectiveStartDate = '"+effectiveStartDate+"', @effectiveEndDate = '"+effectiveEndDate+"', @name = '"+name+"', @userLoggedIn = '"+userLoggedIn+"', @contactPersonPhone = '"+contactPersonPhone+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_CLIENT_QUOTE_DETAILS: async (_: any, {input}: any) => {
        const { 
            idClientQuote,
            origin,
            loadType,
            stopOff1,
            stopOff2,
            truckCargoArea,
            destination,
            merchandiseType,
            tripType,
            currencyType,
            urgentCostAndTrack,
            crossingCost,
            freightCost,
            totalCost,
            truckCargoAreaType,
            userLoggedIn,
            emptyMileageCharge
        } = input;
        try {
            await clientQuote.query("exec set_clientQuoteDetail @idClientQuote = '"+idClientQuote+"', @origin = '"+origin+"', @loadType = '"+loadType+"', @stopOff1 = '"+stopOff1+"', @stopOff2 = '"+stopOff2+"', @truckCargoArea = '"+truckCargoArea+"', @destination = '"+destination+"', @merchandiseType = '"+merchandiseType+"', @tripType = '"+tripType+"', @currencyType = '"+currencyType+"', @urgentCostAndTrack = '"+urgentCostAndTrack+"', @crossingCost = '"+crossingCost+"', @freightCost = '"+freightCost+"', @totalCost = '"+totalCost+"', @truckCargoAreaType = '"+truckCargoAreaType+"', @userLoggedIn = '"+userLoggedIn+"', @emptyMileageCharge='"+emptyMileageCharge+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_QUOTE_DETAILS: async (_: any, {input}: any) => {
        const { 
            idclientQuoteDetail,
            idClientQuote,
            origin,
            loadType,
            stopOff1,
            stopOff2,
            truckCargoArea,
            destination,
            merchandiseType,
            tripType,
            currencyType,
            urgentCostAndTrack,
            crossingCost,
            freightCost,
            totalCost,
            truckCargoAreaType,
            userLoggedIn,
            status,
            emptyMileageCharge
        } = input;
        try {
            await clientQuote.query("exec update_clientQuoteDetail @idclientQuoteDetail = '"+idclientQuoteDetail+"', @idClientQuote = '"+idClientQuote+"', @origin = '"+origin+"', @loadType = '"+loadType+"', @stopOff1 = '"+stopOff1+"', @stopOff2 = '"+stopOff2+"', @truckCargoArea = '"+truckCargoArea+"', @destination = '"+destination+"', @merchandiseType = '"+merchandiseType+"', @tripType = '"+tripType+"', @currencyType = '"+currencyType+"', @urgentCostAndTrack = '"+urgentCostAndTrack+"', @crossingCost = '"+crossingCost+"', @freightCost = '"+freightCost+"', @totalCost = '"+totalCost+"', @truckCargoAreaType = '"+truckCargoAreaType+"', @userLoggedIn = '"+userLoggedIn+"', @status = '"+status+"', @emptyMileageCharge='"+emptyMileageCharge+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_CLIENT_QUOTE_TERMS_AND_CONDITIONS: async (_: any, {input}: any) => {
        const { 
            idClientQuote,
            termsAndConditions,
            userLoggedIn
        } = input;
        try {
            await clientQuote.query("exec set_clientQuoteTermsAndConditions @idClientQuote = '"+idClientQuote+"', @termsAndConditions = '"+termsAndConditions+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_QUOTE_TERMS_AND_CONDITIONS: async (_: any, {input}: any) => {
        const { 
            idClientQuoteTermsAndConditions,
            termsAndConditions,
            userLoggedIn
        } = input;
        try {
            await clientQuote.query("exec update_clientQuoteTermsAndConditions @idClientQuoteTermsAndConditions = '"+idClientQuoteTermsAndConditions+"', @termsAndConditions = '"+termsAndConditions+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    SET_CLIENT_QUOTE_LOGO: async (_: any, {input}: any) => {
        const { 
            idClientQuote,
            link,
            userLoggedIn,
            number
        } = input;
        try {
            await clientQuote.query("exec set_clientQuoteLogos @idClientQuote = '"+idClientQuote+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"', @number = '"+number+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_CLIENT_QUOTE_LOGO: async (_: any, {input}: any) => {
        const { 
            idClientQuoteLogos,
            link,
            userLoggedIn
        } = input;
        try {
            await clientQuote.query("exec edit_clientQuoteLogos @idClientQuoteLogos = '"+idClientQuoteLogos+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    CLEAN_CLIENT_QUOTE_LOGO: async (_: any, {input}: any) => {
        const { 
            idClientQuoteLogos,
            userLoggedIn,
        } = input;
        try {
            await clientQuote.query("exec clean_img_clientQuoteLogos @idClientQuoteLogos = '"+idClientQuoteLogos+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_CLIENT_QUOTE: async (_: any, {input}: any) => {
        const { 
            idClientQuote,
            userLoggedIn
        } = input;
        try {
            await clientQuote.query("exec delete_clientQuote @idClientQuote = '"+idClientQuote+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha eliminado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DUPLICATE_CLIENT_QUOTE: async (_: any, {input}: any) => {
        const { 
            idClientQuote,
            idUser,
            name,
            userLoggedIn
        } = input;
        try {
            const newRecord = await clientQuote.query("exec duplicate_clientQuote @idClientQuote = '"+idClientQuote+"', @idUser = '"+idUser+"', @name = '"+name+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
};

export default clientQuoteMutations;