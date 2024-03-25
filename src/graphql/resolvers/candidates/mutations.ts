import { candidates } from "../../../db/Entities/candidates";

const candidatesMutations = {
    CREATE_CANDIDATE: async (_: any, {input}: any) => {
        const { 
            contact, 
            firstName, 
            paternalLastName,
            maternalLastName,
            driverLicenseIsActive, 
            APTOIsActive, 
            currentlyLabaorando, 
            age, 
            experience, 
            locatedAt, 
            phone, 
            comments, 
            dateCandidateAdded, 
            userLoggedIn, 
            antiquity, 
            idJobTitle ,
            currentJob
        } = input;
        try {
            const newRecord = await candidates.query("exec create_candidates @contact = '"+contact+"', @firstName = '"+firstName+"', @paternalLastName= '"+paternalLastName+"', @maternalLastName = '"+maternalLastName+"', @driverLicenseIsActive = '"+driverLicenseIsActive+"', @APTOIsActive = '"+APTOIsActive+"', @currentlyLabaorando = '"+currentlyLabaorando+"', @age = '"+age+"', @experience = '"+experience+"', @locatedAt = '"+locatedAt+"', @phone = '"+phone+"', @comments = '"+comments+"', @userLoggedIn = '"+userLoggedIn+"', @dateCandidateAdded = '"+dateCandidateAdded+"', @antiquity = '"+antiquity+"', @idJobTitle = '"+idJobTitle+"', @currentJob = '"+currentJob+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CANDIDATE: async (_: any, {input}: any) => {
        const { 
            id, 
            contact, 
            firstName, 
            paternalLastName,
            maternalLastName,
            driverLicenseIsActive, 
            APTOIsActive, 
            currentlyLabaorando, 
            age, 
            experience, 
            locatedAt, 
            phone, 
            comments, 
            dateCandidateAdded, 
            userLoggedIn, 
            antiquity, 
            idJobTitle,
            currentJob
        } = input;
        try {
            const newRecord = await candidates.query("exec update_candidates @id = '"+id+"', @contact = '"+contact+"', @firstName = '"+firstName+"', @paternalLastName = '"+paternalLastName+"', @maternalLastName = '"+maternalLastName+"', @driverLicenseIsActive = '"+driverLicenseIsActive+"', @APTOIsActive = '"+APTOIsActive+"', @currentlyLabaorando = '"+currentlyLabaorando+"', @age = '"+age+"', @experience = '"+experience+"', @locatedAt = '"+locatedAt+"', @phone = '"+phone+"', @comments = '"+comments+"', @userLoggedIn = '"+userLoggedIn+"', @dateCandidateAdded = '"+dateCandidateAdded+"', @antiquity = '"+antiquity+"', @idJobTitle = '"+idJobTitle+"', @currentJob = '"+currentJob+"' ");
            return newRecord[0].message;

        } catch (error) {
            console.log(error);
        }
    },
    REJECT_CANDIDATE: async (_: any, {input}: any) => {
        const {idCandidate, userLoggedIn, dateRejected, rejectionComment} = input;
        try {
            await candidates.query("exec reject_candidate @idCandidate = '"+idCandidate+"', @userLoggedIn = '"+userLoggedIn+"', @dateReject = '"+dateRejected+"', @rejectionComment = '"+rejectionComment+"' ");
            return "Candidato rechazado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    SET_ACCEPTED_CANDIDATE: async (_: any, {input}: any) => {
        const {idCandidate, startDate, userLoggedIn} = input;
        try {
            const newRecord =  await candidates.query("exec set_accept_candidate @idCandidate = '"+idCandidate+"', @startDate = '"+startDate+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord[0].message;
        } catch (error) {
            console.log(error);
        }
    },
    SET_REENTRY_CANDIDATE: async (_: any, {input}: any) => {
        const {idCandidate, dateReentry, userLoggedIn} = input;
        try {
            await candidates.query("exec set_reentryCandidate @idCandidate = '"+idCandidate+"', @dateReentry = '"+dateReentry+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return "Candidato reingresado correctamente";
        } catch (error) {
            console.log(error);
        }
    }

};

export default candidatesMutations;