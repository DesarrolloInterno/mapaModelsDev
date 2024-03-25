import { testDrive } from "../../../db/Entities/testDrive";

const testDriveQuery = {
    GET_TESTDRIVEBYCANDIDATE: async (_: any, {idCandidates}: any) => {
        try{
            const result = await testDrive.query("exec get_testDriveByCandidates @idCandidates = '"+ idCandidates +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CANDIDATE_TESTDRIVE: async (_: any, {idTestDriveint}: any) => {
        try{
            const result = await testDrive.query("exec get_Candidates_TestDrive @idTestDrive = '"+ idTestDriveint +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default testDriveQuery;