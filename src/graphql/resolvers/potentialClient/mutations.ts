import { potentialClient } from "../../../db/Entities/potentialClient";

const potentialClientMutations = {
    CREATE_POTENTIAL_CLIENT: async (_: any, {input}: any) => {
        const { 
            name,
            mail,
            phone,
            trackingEmail,
            user,
            password,
            userLoggedIn,
            formatClient,
            idEnterprise
        } = input;
        try {
            const newRecord = await potentialClient.query("exec create_potentialClient @name = '"+name+"', @mail = '"+mail+"', @phone = '"+phone+"', @trackingEmail = '"+trackingEmail+"', @user = '"+user+"', @password = '"+password+"', @encrypt = '"+process.env.ENCRYPT+"', @userLoggedIn = '"+userLoggedIn+"', @formatClient = '"+formatClient+"', @idEnterprise = '"+idEnterprise+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPEDATE_POTENTIAL_CLIENT: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
            name,
            mail,
            phone,
            trackingEmail,
            user,
            password,
            userLoggedIn,
            formatClient,
            idEnterprise
        } = input;
        try {
            const updateRecord = await potentialClient.query("exec update_potentialClient @idPotentialClient = '"+idPotentialClient+"', @name = '"+name+"', @mail = '"+mail+"', @phone = '"+phone+"', @trackingEmail = '"+trackingEmail+"', @user = '"+user+"', @password = '"+password+"', @encrypt = '"+process.env.ENCRYPT+"', @userLoggedIn = '"+userLoggedIn+"', @formatClient = '"+formatClient+"', @idEnterprise = '"+idEnterprise+"' ");
            return updateRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_FORM: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
            businessName,
            RFC,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            zipCode,
            idCountry,
            idTown,
            idState,
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
            mailReceiptInvoices,
            invoiceReceptionDays,
            sealedOrSignedWaybill,
            instructionLetter,
            importRequest,
            remission,
            idPaymentMethod,
            idUseOfCFDI,
            currency,
            idPayment,
            idFiscalSystem,
            creditDays,
            requestedCreditLimit,
            paymentSchedule,
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
            httpAddress,
            userWebPageClient,
            passwordWebPageClient,
            finishedForm,
            town
        } = input;
        try {
            await potentialClient.query("exec update_potentialClientForm " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
            "@businessName = '"+businessName+"', " +
            "@RFC = '"+RFC+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@insideAddressNumber = '"+insideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@zipCode = '"+zipCode+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idTown = '"+idTown+"', " +
            "@idState = '"+idState+"', " +
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
            "@mailReceiptInvoices = '"+mailReceiptInvoices+"', " +
            "@invoiceReceptionDays = '"+invoiceReceptionDays+"', " +
            "@sealedOrSignedWaybill = "+sealedOrSignedWaybill+", " +
            "@instructionLetter = "+instructionLetter+", " +
            "@importRequest = "+importRequest+", " +
            "@remission = "+remission+", " +
            "@idPaymentMethod = '"+idPaymentMethod+"', " +
            "@idUseOfCFDI = '"+idUseOfCFDI+"', " +
            "@currency = '"+currency+"', " +
            "@idPayment = '"+idPayment+"', " +
            "@idFiscalSystem = '"+idFiscalSystem+"', " +
            "@creditDays = '"+creditDays+"', " +
            "@requestedCreditLimit = '"+requestedCreditLimit+"', " +
            "@paymentSchedule = '"+paymentSchedule+"', " +
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
            "@httpAddress = '"+httpAddress+"', " +
            "@userWebPageClient = '"+userWebPageClient+"', " +
            "@passwordWebPageClient = '"+passwordWebPageClient+"', " +
            "@encrypt = '"+process.env.ENCRYPT+"'," +
            "@finishedForm = '"+finishedForm+"', "+
            "@town = '"+town+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_FORM_INTERNATIONAL: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
            businessName,
            TAXID,
            address,
            outsideAddressNumber,
            neighborhood,
            zipCode,
            idCountry,
            idTown,
            idState,
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
            mailReceiptInvoices,
            invoiceReceptionDays,
            requestTaxpayerIdentification,
            bankStatement,
            articlesOfIncorporation,
            currency,
            creditDays,
            requestedCreditLimit,
            paymentSchedule,
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
            httpAddress,
            userWebPageClient,
            passwordWebPageClient,
            finishedForm,
            town
        } = input;
        try {
            await potentialClient.query("exec update_potentialClientForm_international " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
            "@businessName = '"+businessName+"', " +
            "@TAXID = '"+TAXID+"', " +
            "@address = '"+address+"', " +
            "@outsideAddressNumber = '"+outsideAddressNumber+"', " +
            "@neighborhood = '"+neighborhood+"', " +
            "@zipCode = '"+zipCode+"', " +
            "@idCountry = '"+idCountry+"', " +
            "@idTown = '"+idTown+"', " +
            "@idState = '"+idState+"', " +
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
            "@mailReceiptInvoices = '"+mailReceiptInvoices+"', " +
            "@invoiceReceptionDays = '"+invoiceReceptionDays+"', " +
            "@requestTaxpayerIdentification = "+requestTaxpayerIdentification+", " +
            "@bankStatement = "+bankStatement+", " +
            "@articlesOfIncorporation = "+articlesOfIncorporation+", " +
            "@currency = '"+currency+"', " +
            "@creditDays = '"+creditDays+"', " +
            "@requestedCreditLimit = '"+requestedCreditLimit+"', " +
            "@paymentSchedule = '"+paymentSchedule+"', " +
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
            "@httpAddress = '"+httpAddress+"', " +
            "@userWebPageClient = '"+userWebPageClient+"', " +
            "@passwordWebPageClient = '"+passwordWebPageClient+"', " +
            "@encrypt = '"+process.env.ENCRYPT+"'," +
            "@finishedForm = '"+finishedForm+"', "+
            "@town = '"+town+"' ");
            return 'Information updated successfully'
        } catch (error) {
            console.log(error);
        }
    },
    SET_MAIL_POTENTIAL_CLIENT: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            const newRecord = await potentialClient.query("exec set_mail_potentialClient @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_GENERALDATA: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
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
            town
        } = input;
        try {
            await potentialClient.query("exec update_potentialClientGeneralData " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
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
            "@town = '"+town+"' ");
            return 'Datos actualizados correctamente'
        } catch (error) {
            console.log(error);
        }
    },
    CONFIRM_POTENTIAL_CLIENT_GENERALDATA: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec confirm_potentialClientGeneralData @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos confirmados correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_DIRECTORIES: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
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
            await potentialClient.query("exec update_potentialClientFormDirectories " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
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
    CONFIRM_POTENTIAL_CLIENT_DIRECTORIES: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec confirm_potentialClientDirectories @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos confirmados correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_INVOICEDATA: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
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
            await potentialClient.query("exec update_potentialClientInvoiceData " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
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
    CONFIRM_POTENTIAL_CLIENT_INVOICEDATA: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec confirm_potentialClientInvoiceData @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos confirmados correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_LOADINGREFERENCES: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
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
            await potentialClient.query("exec update_potentialClientLoadingReferences " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
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
    CONFIRM_POTENTIAL_CLIENT_LOADINGREFERENCES: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec confirm_potentialClientLoadingReferences @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos confirmados correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_BILLINGPORTAL: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
            httpAddress,
            userWebPageClient,
            passwordWebPageClient,
            userLoggedIn
        } = input;
        try {
            await potentialClient.query("exec update_potentialClientBillingPortal " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
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
    CONFIRM_POTENTIAL_CLIENT_BILLINGPORTAL: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec confirm_potentialClientBillingPortal @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos confirmados correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_POTENTIAL_CLIENT_CREDIT: async (_: any, {input}: any) => {
        const { 
            idPotentialClient,
            creditDays,
            paymentSchedule,
            requestedCreditLimit,
            authorizedCreditLimit,
            userLoggedIn,
            authorizedCreditDays
        } = input;
        try {
            await potentialClient.query("exec update_potentialClientCredit " +
            "@idPotentialClient = '"+idPotentialClient+"', " +
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
    CONFIRM_POTENTIAL_CLIENT_CREDIT: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec confirm_potentialClientCredit @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Datos confirmados correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    CONVERT_POTENTIAL_CLIENT_CLIENT: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            const newRecord = await potentialClient.query("exec convertLeadToCustomer @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_POTENTIAL_CLIENT: async (_: any, {input}: any) => {
        const { idPotentialClient, userLoggedIn } = input;
        try {
            await potentialClient.query("exec delete_potentialClient @idPotentialClient = '"+idPotentialClient+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Cliente potencial eliminado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
};

export default potentialClientMutations;