import { antidoping } from "../../../db/Entities/antidoping";

const antidopingMutations = {
    SET_ANTIDOPING: async (_: any, {input}: any) => {
        const {idCandidates, comments, userLoggedIn, correctlyCompleted, result, antidopingDate} = input;
        try {
            const newData = await antidoping.query("exec set_antidoping @idCandidates = '"+idCandidates+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"', @result= '"+result+"', @antidopingDate = '"+antidopingDate+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }
    },
    SET_ANTIDOPING_DOCUMENTS: async (_: any, {input}: any) => {
        const { idAntidoping, link, userLoggedIn } = input;
        try {
            await antidoping.query("exec set_document_antidoping @idAntidoping = '"+idAntidoping+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_ANTIDOPING_EMPLOYEE: async (_: any, {input}: any) => {
        const { 
            idEmployee,
            comments,
            result,
            antidopingDate,
            userLoggedIn
        } = input;
        try {
            const newRecord = await antidoping.query("exec create_antidoping @idEmployee = '"+idEmployee+"', @comments = '"+comments+"', @result = '"+result+"', @antidopingDate = '"+antidopingDate+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_ANTIDOPING_EMPLOYEE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idAntidoping, link, userLoggedIn } = input;
        try {
            await antidoping.query("exec set_document_antidoping_employee @idAntidoping= '"+idAntidoping+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_ANTIDOPING_EMPLOYEE: async (_: any, {input}: any) => {
        const { 
            idAntidoping,
            idEmployee,
            comments,
            result,
            antidopingDate,
            userLoggedIn,
            documentLink
        } = input;
        try {
            await antidoping.query("exec edit_antidoping_employee @idAntidoping = '"+idAntidoping+"', @idEmployee = '"+idEmployee+"', @comments = '"+comments+"', @result = '"+result+"', @antidopingDate = '"+antidopingDate+"', @userLoggedIn = '"+userLoggedIn+"', @documentLink = '"+documentLink+"'  ");
            return 'Examen toxicológico editado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    EDIT_ANTIDOPING_EMPLOYEE_WITHOUT_DOCUMENT: async (_: any, {input}: any) => {
        const { 
            idAntidoping,
            idEmployee,
            comments,
            result,
            antidopingDate,
            userLoggedIn,
        } = input;
        try {
            await antidoping.query("exec edit_antidoping_employee_without_document @idAntidoping = '"+idAntidoping+"', @idEmployee = '"+idEmployee+"', @comments = '"+comments+"', @result = '"+result+"', @antidopingDate = '"+antidopingDate+"', @userLoggedIn = '"+userLoggedIn+"'");
            return 'Examen toxicológico editado correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default antidopingMutations;