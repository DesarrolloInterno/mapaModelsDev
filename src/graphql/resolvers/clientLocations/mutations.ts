import { clientLocations } from "../../../db/Entities/clientLocations";

const clientLocationsMutations = {

    CREATE_CLIENT_LOCATION: async (_: any, {input}: any) => {
        const {
            RFC,
            TAXID,
			name,
			address,
			outsideAddressNumber,
			insideAddressNumber,
			neighborhood,
			zipCode,
			idCountry,
			idState,
			idTown,
			town,
			latitude,
			longitude,
            userLoggedIn,
            confirm,
            additionalInformation
        } = input;

        try {
            const newRecord = await clientLocations.query("exec create_clientLocations " +
                "@RFC = '" + RFC + "', " +
                "@TAXID = '" + TAXID + "', " +
                "@name = '" + name + "', " +
                "@address = '" + address + "', " +
                "@outsideAddressNumber = '" + outsideAddressNumber + "', " +
                "@insideAddressNumber = '" + insideAddressNumber + "', " +
                "@neighborhood = '" + neighborhood + "', " +
                "@zipCode = '" + zipCode + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@latitude = '" + latitude + "', " +
                "@longitude = '" + longitude + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@confirm = '" + confirm + "', " +
                "@additionalInformation = '" + additionalInformation + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    EDIT_CLIENT_LOCATION: async (_: any, {input}: any) => {
        const {
            idClientLocation,
            RFC,
            TAXID,
			name,
			address,
			outsideAddressNumber,
			insideAddressNumber,
			neighborhood,
			zipCode,
			idCountry,
			idState,
			idTown,
			town,
			latitude,
			longitude,
            userLoggedIn,
            confirm,
            additionalInformation
        } = input;

        try {
            const newRecord = await clientLocations.query("exec edit_clientLocations " +
                "@idClientLocation = '" + idClientLocation + "', " +
                "@RFC = '" + RFC + "', " +
                "@TAXID = '" + TAXID + "', " +
                "@name = '" + name + "', " +
                "@address = '" + address + "', " +
                "@outsideAddressNumber = '" + outsideAddressNumber + "', " +
                "@insideAddressNumber = '" + insideAddressNumber + "', " +
                "@neighborhood = '" + neighborhood + "', " +
                "@zipCode = '" + zipCode + "', " +
                "@idCountry = '" + idCountry + "', " +
                "@idState = '" + idState + "', " +
                "@idTown = '" + idTown + "', " +
                "@town = '" + town + "', " +
                "@latitude = '" + latitude + "', " +
                "@longitude = '" + longitude + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@confirm = '" + confirm + "', " +
                "@additionalInformation = '" + additionalInformation + "' "

            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_CLIENT_LOCATION: async (_: any, {input}: any) => {
        const {
            idClientLocation,
            userLoggedIn
        } = input;

        try {
            await clientLocations.query("exec delete_clientLocations " +
                "@idClientLocation = '" + idClientLocation + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
};

export default clientLocationsMutations;