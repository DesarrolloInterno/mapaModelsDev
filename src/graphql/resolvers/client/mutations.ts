import { client } from "../../../db/Entities/client";

const clientsMutations = {
    DELETE_CLIENT: async (_: any, {input}: any) => {
        const { idClient, userLoggedIn } = input;
        try {
        await client.query("exec delete_Client @idClient = '"+idClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
        return 'Cliente eliminado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_GENERALDATA: async (_: any, {input}: any) => {
        const { 
            idClient,
            businessName,
            shortName,
            RFC,
            TAXID,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            zipCode,
            idCountry,
            idTown,
            idState,
            userLoggedIn,
            town,
            formatClient
        } = input;
        try {
            await client.query("exec update_clientGeneralData " +
            "@idClient = '"+idClient+"', " +
            "@businessName = '"+businessName+"', " +
            "@shortName = '"+shortName+"', " +
            "@RFC = '"+RFC+"', " +
            "@TAXID = '"+TAXID+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@insideAddressNumber = '"+insideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@zipCode = '"+zipCode+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idTown = '"+idTown+"', " +
            "@idState = '"+idState+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@town = '"+town+"', " +
            "@formatClient = '"+formatClient+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_DIRECTORIES: async (_: any, {input}: any) => {
        const { 
            idClient,
            billingReceptionPerson,
            billingReceptionPersonPhone,
            billingReceptionPersonMail,
            billingReceptionPersonStaffPosition,
            paymentReceptionPerson,
            paymentReceptionPersonPhone,
            paymentReceptionPersonMail,
            paymentReceptionPersonStaffPosition,
            chiefExecutiveOfficer,
            chiefExecutiveOfficerPhone,
            chiefExecutiveOfficerMail,
            chiefExecutiveOfficerStaffPosition,
            logisticsContactPerson,
            logisticsContactPersonPhone,
            logisticsContactPersonMail,
            logisticsContactPersonStaffPosition,
            userLoggedIn
        } = input;
        try {
            await client.query("exec update_clientFormDirectories " +
            "@idClient = '"+idClient+"', " +
            "@billingReceptionPerson = '"+billingReceptionPerson+"', " +
            "@billingReceptionPersonPhone = '"+billingReceptionPersonPhone+"', " +
            "@billingReceptionPersonMail = '"+billingReceptionPersonMail+"', " +
            "@billingReceptionPersonStaffPosition = '"+billingReceptionPersonStaffPosition+"', " +
            "@paymentReceptionPerson = '"+paymentReceptionPerson+"', " +
            "@paymentReceptionPersonPhone = '"+paymentReceptionPersonPhone+"', " +
            "@paymentReceptionPersonMail = '"+paymentReceptionPersonMail+"', " +
            "@paymentReceptionPersonStaffPosition = '"+paymentReceptionPersonStaffPosition+"', " +
            "@chiefExecutiveOfficer = '"+chiefExecutiveOfficer+"', " +
            "@chiefExecutiveOfficerPhone = '"+chiefExecutiveOfficerPhone+"', " +
            "@chiefExecutiveOfficerMail = '"+chiefExecutiveOfficerMail+"', " +
            "@chiefExecutiveOfficerStaffPosition = '"+chiefExecutiveOfficerStaffPosition+"', " +
            "@logisticsContactPerson = '"+logisticsContactPerson+"', " +
            "@logisticsContactPersonPhone = '"+logisticsContactPersonPhone+"', " +
            "@logisticsContactPersonMail = '"+logisticsContactPersonMail+"', " +
            "@logisticsContactPersonStaffPosition = '"+logisticsContactPersonStaffPosition+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_INVOICEDATA: async (_: any, {input}: any) => {
        const { 
            idClient,
            mailReceiptInvoices,
            invoiceReceptionDays,
            sealedOrSignedWaybill,
            instructionLetter,
            importRequest,
            remission,
            requestTaxpayerIdentification,
            bankStatement,
            articlesOfIncorporation,
            idPaymentMethod,
            idUseOfCFDI,
            currency,
            idPayment,
            idFiscalSystem,
            userLoggedIn
        } = input;
        try {
            await client.query("exec update_clientInvoiceData " +
            "@idClient = '"+idClient+"', " +
            "@mailReceiptInvoices = '"+mailReceiptInvoices+"', " +
            "@invoiceReceptionDays = '"+invoiceReceptionDays+"', " +
            "@sealedOrSignedWaybill = "+sealedOrSignedWaybill+", " +
            "@instructionLetter = "+instructionLetter+", " +
            "@importRequest = "+importRequest+", " +
            "@remission = "+remission+", " +
            "@requestTaxpayerIdentification = "+requestTaxpayerIdentification+", " +
            "@bankStatement = "+bankStatement+", " +
            "@articlesOfIncorporation = "+articlesOfIncorporation+", " +
            "@idPaymentMethod = '"+idPaymentMethod+"', " +
            "@idUseOfCFDI = '"+idUseOfCFDI+"', " +
            "@currency = '"+currency+"', " +
            "@idPayment = '"+idPayment+"', " +
            "@idFiscalSystem = '"+idFiscalSystem+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_LOADINGREFERENCES: async (_: any, {input}: any) => {
        const { 
            idClient,
            weeklyLoadVolume,
            monthlyLoadVolume,
            references1Name,
            references1Phone,
            references1CorporateName,
            references1CorporateNumber,
            references2Name,
            references2Phone,
            references2CorporateName,
            references2CorporateNumber,
            references3Name,
            references3Phone,
            references3CorporateName,
            references3CorporateNumber,
            userLoggedIn
        } = input;
        try {
            await client.query("exec update_clientLoadingReferences " +
            "@idClient = '"+idClient+"', " +
            "@weeklyLoadVolume = '"+weeklyLoadVolume+"', " +
            "@monthlyLoadVolume = '"+monthlyLoadVolume+"', " +
            "@references1Name = '"+references1Name+"', " +
            "@references1Phone = '"+references1Phone+"', " +
            "@references1CorporateName = '"+references1CorporateName+"', " +
            "@references1CorporateNumber = '"+references1CorporateNumber+"', " +
            "@references2Name = '"+references2Name+"', " +
            "@references2Phone = '"+references2Phone+"', " +
            "@references2CorporateName = '"+references2CorporateName+"', " +
            "@references2CorporateNumber = '"+references2CorporateNumber+"', " +
            "@references3Name = '"+references3Name+"', " +
            "@references3Phone = '"+references3Phone+"', " +
            "@references3CorporateName = '"+references3CorporateName+"', " +
            "@references3CorporateNumber = '"+references3CorporateNumber+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_BILLINGPORTAL: async (_: any, {input}: any) => {
        const { 
            idClient,
            httpAddress,
            userWebPageClient,
            passwordWebPageClient,
            userLoggedIn
        } = input;
        try {
            await client.query("exec update_clientBillingPortal " +
            "@idClient = '"+idClient+"', " +
            "@httpAddress = '"+httpAddress+"', " +
            "@userWebPageClient = '"+userWebPageClient+"', " +
            "@passwordWebPageClient = '"+passwordWebPageClient+"', " +
            "@encrypt = '"+process.env.ENCRYPT+"'," +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_CREDIT: async (_: any, {input}: any) => {
        const { 
            idClient,
            creditDays,
            paymentSchedule,
            requestedCreditLimit,
            authorizedCreditLimit,
            userLoggedIn,
            authorizedCreditDays
        } = input;
        try {
            await client.query("exec update_clientCredit " +
            "@idClient = '"+idClient+"', " +
            "@creditDays = '"+creditDays+"', " +
            "@paymentSchedule = '"+paymentSchedule+"', " +
            "@requestedCreditLimit = '"+requestedCreditLimit+"', " +
            "@authorizedCreditLimit = '"+authorizedCreditLimit+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', "+
            "@authorizedCreditDays = '"+authorizedCreditDays+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_CLIENT_GENERALDATA: async (_: any, {input}: any) => {
        const { 
            businessName,
            shortName,
            RFC,
            TAXID,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            zipCode,
            idCountry,
            idTown,
            idState,
            userLoggedIn,
            town,
            formatClient
        } = input;
        try {
            const newData = await client.query("exec create_clientGeneralData " +
            "@businessName = '"+businessName+"', " +
            "@shortName = '"+shortName+"', " +
            "@RFC = '"+RFC+"', " +
            "@TAXID = '"+TAXID+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@insideAddressNumber = '"+insideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@zipCode = '"+zipCode+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idTown = '"+idTown+"', " +
            "@idState = '"+idState+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@town = '"+town+"', "+
            "@formatClient = '"+formatClient+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }
    },
};

export default clientsMutations;