import { insurer } from "../../../db/Entities/insurer";

const insurerMutations = {

    CREATE_INSURER: async (_: any, {input}: any) => {
        const {
			name,
            street,
            streetNumber,
            unitNumber,
            locality,
            CP,
            idCountry,
			idState,
			idTown,
            country,
            state,
            town,
	        contactName,
	        phone,
	        email,
	        userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await insurer.query("exec create_insurer " +
                "@name = '" + name + "', " +
                "@street = '" + street + "', " +
                "@streetNumber = '" + streetNumber + "', " +
                "@unitNumber = '" + unitNumber + "', " +
                "@locality = '" + locality + "', " +
                "@CP = '" + CP + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@country = '" + country + "', " +
                "@state = '" + state + "', " +
                "@town = '" + town + "', " +
                "@contactName = '" + contactName + "', " +
                "@phone = '" + phone + "', " +
                "@email = '" + email + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_INSURER: async (_: any, {input}: any) => {
        const {
            idInsurer,
			name,
            street,
            streetNumber,
            unitNumber,
            locality,
            CP,
            idCountry,
			idState,
			idTown,
            country,
            state,
            town,
	        contactName,
	        phone,
	        email,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await insurer.query("exec update_insurer " +
                "@idInsurer = '" + idInsurer + "', " +
                "@name = '" + name + "', " +
                "@street = '" + street + "', " +
                "@streetNumber = '" + streetNumber + "', " +
                "@unitNumber = '" + unitNumber + "', " +
                "@locality = '" + locality + "', " +
                "@CP = '" + CP + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@country = '" + country + "', " +
                "@state = '" + state + "', " +
                "@town = '" + town + "', " +
                "@contactName = '" + contactName + "', " +
                "@phone = '" + phone + "', " +
                "@email = '" + email + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_INSURER: async (_: any, {input}: any) => {
        const {
            idInsurer,
            userLoggedIn
        } = input;

        try {
            await insurer.query("exec delete_insurer " +
                "@idInsurer = '" + idInsurer + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default insurerMutations;