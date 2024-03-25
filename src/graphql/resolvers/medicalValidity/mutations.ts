import { medicalValidity } from "../../../db/Entities/medicalValidity";

const medicalValidityMutations = {

    CREATE_MEDICAL_VALIDITY: async (_: any, {input}: any) => {
        const { 
            idEmployee,
            medicalEffectiveDate,
            userLoggedIn
        } = input;
        try {
            const newRecord = await medicalValidity.query("exec create_medicalValidity @idEmployee = '"+idEmployee+"', @medicalEffectiveDate = '"+medicalEffectiveDate+"', @userLoggedIn = '"+userLoggedIn+"'  ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },

    SET_MEDICAL_VALIDITY_DOCUMENTS: async (_: any, {input}: any) => {
        const { idMedicalValidity, link, userLoggedIn } = input;
        try {
            await medicalValidity.query("exec set_document_medicalValidity @idMedicalValidity = '"+idMedicalValidity+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_MEDICAL_VALIDITY: async (_: any, {input}: any) => {
        const { 
            idMedicalValidity,
            idEmployee,
            medicalEffectiveDate,
            userLoggedIn,
            documentLink
        } = input;
        try {
            await medicalValidity.query("exec edit_medicalValidity @idMedicalValidity = '"+idMedicalValidity+"', @idEmployee = '"+idEmployee+"', @medicalEffectiveDate = '"+medicalEffectiveDate+"', @userLoggedIn = '"+userLoggedIn+"', @documentLink = '"+documentLink+"'  ");
            return 'Licencia de conducir editada correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_MEDICAL_VALIDITY_WITHOUT_DOCUMENT: async (_: any, {input}: any) => {
        const { 
            idMedicalValidity,
            idEmployee,
            medicalEffectiveDate,
            userLoggedIn
        } = input;
        try {
            await medicalValidity.query("exec edit_medicalValidity_without_document @idMedicalValidity = '"+idMedicalValidity+"', @idEmployee = '"+idEmployee+"', @medicalEffectiveDate = '"+medicalEffectiveDate+"', @userLoggedIn = '"+userLoggedIn+"'  ");
            return 'Licencia de conducir editada correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default medicalValidityMutations;