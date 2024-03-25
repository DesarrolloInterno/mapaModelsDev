import { testDrive } from "../../../db/Entities/testDrive";

const testDriveMutation = {
    SET_TESTDRIVE: async (_: any, {input}: any) => {
        const {idCandidates, comments, userLoggedIn,correctlyCompleted} = input;
        try {
            const newData = await testDrive.query("exec set_testDrive @idCandidates = '"+idCandidates+"', @comments = '"+comments+"' , @userLoggedIn = '"+userLoggedIn+"', @correctlyCompleted = '"+correctlyCompleted+"' ");
            return newData
        } catch (error) {
            console.log(error);
        }

    },
    SET_TESTDRIVE_DOCUMENTS: async (_: any, {input}: any) => {
        const { idTestDriveint, link, userLoggedIn } = input;
        try {
            await testDrive.query("exec set_document_testDrive @idTestDriveint = '"+idTestDriveint+"', @link = '"+link+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Documento agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    }

};

export default testDriveMutation;