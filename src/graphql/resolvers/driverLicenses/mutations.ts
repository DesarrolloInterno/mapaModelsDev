import { driverLicenses } from "../../../db/Entities/driverLicenses";

const driverLicensesMutations = {
    CREATE_DRIVER_LICENSE: async (_: any, {input}: any) => {
        const { 
            idEmployee,
            number,
            idTypeLicense,
            licenseEffectiveDate,
            dateSeniority,
            userLoggedIn
        } = input;
        try {
            const newRecord = await driverLicenses.query("exec create_driverLicenses @idEmployee = '"+idEmployee+"', @number = '"+number+"', @idTypeLicense = '"+idTypeLicense+"', @licenseEffectiveDate = '"+licenseEffectiveDate+"', @dateSeniority = '"+dateSeniority+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_DRIVER_LICENSE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idDriverLicense, link, userLoggedIn } = input;
        try {
            await driverLicenses.query("exec set_document_driverLicenses @idDriverLicense = '"+idDriverLicense+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_DRIVER_LICENSE: async (_: any, {input}: any) => {
        const { 
            idLicense,
            idEmployee,
            number,
            idTypeLicense,
            licenseEffectiveDate,
            dateSeniority,
            userLoggedIn,
            documentLink
        } = input;
        try {
            await driverLicenses.query("exec edit_driverLicenses @idLicense = '"+idLicense+"', @idEmployee = '"+idEmployee+"', @number = '"+number+"', @idTypeLicense = '"+idTypeLicense+"', @licenseEffectiveDate = '"+licenseEffectiveDate+"', @dateSeniority = '"+dateSeniority+"', @userLoggedIn = '"+userLoggedIn+"', @documentLink = '"+documentLink+"' ");
            return 'Licencia de conducir editada correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_DRIVER_LICENSE_WITHOUT_DOCUMENT: async (_: any, {input}: any) => {
        const { 
            idLicense,
            idEmployee,
            number,
            idTypeLicense,
            licenseEffectiveDate,
            dateSeniority,
            userLoggedIn
        } = input;
        try {
            await driverLicenses.query("exec edit_driverLicenses_without_document @idLicense = '"+idLicense+"', @idEmployee = '"+idEmployee+"', @number = '"+number+"', @idTypeLicense = '"+idTypeLicense+"', @licenseEffectiveDate = '"+licenseEffectiveDate+"', @dateSeniority = '"+dateSeniority+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Licencia de conducir editada correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default driverLicensesMutations;