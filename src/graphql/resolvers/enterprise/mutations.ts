import { enterprise } from "../../../db/Entities/enterprise";

const enterpriseMutations = {

    CREATE_ENTERPRISE: async (_: any, {input}: any) => {
        const {
            name,
            phone,
            legalForm,
            RFC,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            idCountry,
            idState,
            idTown,
            town,
            zipCode ,
            passwordDigitalStampCertificate,
            certificateNumber,
            mailNotification,
            businessName,
            idFiscalSystem,
            userLoggedIn
        } = input;

        try {
            const newRecord = await enterprise.query("exec create_enterprise " +
                "@name = '" + name + "', " +
                "@phone = '" + phone + "', " +
                "@legalForm = '" + legalForm + "', " +
                "@RFC = '" + RFC + "', " +
                "@address = '" + address + "', " +
                "@outsideAddressNumber = '" + outsideAddressNumber + "', " +
                "@insideAddressNumber = '" + insideAddressNumber + "', " +
                "@neighborhood = '" + neighborhood + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@zipCode = '" + zipCode + "', " +
                "@passwordDigitalStampCertificate = '" + passwordDigitalStampCertificate + "', " +
                "@certificateNumber = '" + certificateNumber + "', " +
                "@mailNotification = '" + mailNotification + "', " +
                "@businessName = '" + businessName + "', " +
                "@idFiscalSystem = '" + idFiscalSystem + "', " +
                "@encrypt = '" + process.env.ENCRYPT + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    EDIT_ENTERPRISE: async (_: any, {input}: any) => {
        const {
            idEnterprise,
            name,
            phone,
            legalForm,
            RFC,
            address,
            outsideAddressNumber,
            insideAddressNumber,
            neighborhood,
            idCountry,
            idState,
            idTown,
            town,
            zipCode ,
            passwordDigitalStampCertificate,
            certificateNumber,
            mailNotification,
            businessName,
            idFiscalSystem,
            userLoggedIn
        } = input;

        try {
            const newRecord = await enterprise.query("exec edit_enterprise " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@name = '" + name + "', " +
                "@phone = '" + phone + "', " +
                "@legalForm = '" + legalForm + "', " +
                "@RFC = '" + RFC + "', " +
                "@address = '" + address + "', " +
                "@outsideAddressNumber = '" + outsideAddressNumber + "', " +
                "@insideAddressNumber = '" + insideAddressNumber + "', " +
                "@neighborhood = '" + neighborhood + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@zipCode = '" + zipCode + "', " +
                "@passwordDigitalStampCertificate = '" + passwordDigitalStampCertificate + "', " +
                "@certificateNumber = '" + certificateNumber + "', " +
                "@mailNotification = '" + mailNotification + "', " +
                "@businessName = '" + businessName + "', " +
                "@idFiscalSystem = '" + idFiscalSystem + "', " +
                "@encrypt = '" + process.env.ENCRYPT + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    SET_DIGITAL_STAMP_CERTIFICATE_ENTERPRISE: async (_: any, {input}: any) => {
        const { idEnterprise, link, userLoggedIn } = input;
        try {
            await enterprise.query("exec set_document_digitalStampCertificate_enterprise @idEnterprise = '"+idEnterprise+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    SET_DIGIRAL_CERTIFICATEKEY_ENTERPRISE: async (_: any, {input}: any) => {
        const { idEnterprise, link, userLoggedIn } = input;
        try {
            await enterprise.query("exec set_document_certificateKey_enterprise @idEnterprise = '"+idEnterprise+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    SET_LOGO_ENTERPRISE: async (_: any, {input}: any) => {
        const { idEnterprise, link, userLoggedIn } = input;
        try {
            await enterprise.query("exec set_document_enterpriseLogo_enterprise @idEnterprise = '"+idEnterprise+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    SET_TAXPAYERIDENTIFICATIONCARD_ENTERPRISE: async (_: any, {input}: any) => {
        const { idEnterprise, link, userLoggedIn } = input;
        try {
            await enterprise.query("exec set_document_taxpayerIdentificationCard_enterprise @idEnterprise = '"+idEnterprise+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_ENTERPRISE: async (_: any, {input}: any) => {
        const { idEnterprise, userLoggedIn } = input;
        try {
            await enterprise.query("exec delete_enterprise @idEnterprise = '"+idEnterprise+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Empresa eliminada correctamente';
        } catch (error) {
            console.log(error);
        }
    },
};

export default enterpriseMutations;