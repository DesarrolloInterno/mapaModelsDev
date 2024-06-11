import { clientTravelOrder } from "../../../db/Entities/clientTravelOrder";

const ClientTravelOrderMutations = {
    CREATE_CLIENT_TRAVEL_ORDER: async (_: any, {input}: any) => {
        const {
			idClient,
            name,
            shipmentDate,
            bussinesName,
            fullAddress,
            RFC,
            TAXID,
            idOriginAddres,
            addressOrigin,
            outsideAddressNumberOrigin,
            insideAddressNumberOrigin,
            neighborhoodOrigin,
            zipCodeOrigin,
            idCountryOrigin,
            countryOrigin,
            idStateOrigin,
            idTownOrigin,
            townOrigin,
            idDestinationAddres,
            addressDestination,
            outsideAddressNumberDestination,
            insideAddressNumberDestination,
            neighborhoodDestination,
            zipCodeDestination,
            idCountryDestination,
            countryDestination,
            idStateDestination,
            idTownDestination,
            townDestination,
            subtotal,
            IVA,
            RET,
            total,
            loadingInstructions,
            unloadingInstructions,
            status,
            stateOrigin,
            stateDestination,
            userLoggedIn
        } = input;

        try {
            const newRecord = await clientTravelOrder.query("exec create_clientTravelOrder " +
            "@idClient = '"+idClient+"', " +
            "@name = '"+name+"', " +
            "@shipmentDate = '"+shipmentDate+"', " +
            "@bussinesName = '"+bussinesName+"', " +
            "@fullAddress = '"+fullAddress+"', " +
            "@RFC = '"+RFC+"', " +
            "@TAXID = '"+TAXID+"', " +
            "@idOriginAddres = '"+idOriginAddres+"', " +
            "@addressOrigin = '"+addressOrigin+"', " +
            "@outsideAddressNumberOrigin = '"+outsideAddressNumberOrigin+"', " +
            "@insideAddressNumberOrigin = '"+insideAddressNumberOrigin+"', " +
            "@neighborhoodOrigin = '"+neighborhoodOrigin+"', " +
            "@zipCodeOrigin = '"+zipCodeOrigin+"', " +
            "@idCountryOrigin = '"+idCountryOrigin+"', " +
            "@countryOrigin = '"+countryOrigin+"', " +
            "@idStateOrigin = '"+idStateOrigin+"', " +
            "@idTownOrigin = '"+idTownOrigin+"', " +
            "@townOrigin = '"+townOrigin+"', " +
            "@idDestinationAddres = '"+idDestinationAddres+"', " +
            "@addressDestination = '"+addressDestination+"', " +
            "@outsideAddressNumberDestination = '"+outsideAddressNumberDestination+"', " +
            "@insideAddressNumberDestination = '"+insideAddressNumberDestination+"', " +
            "@neighborhoodDestination = '"+neighborhoodDestination+"', " +
            "@zipCodeDestination = '"+zipCodeDestination+"', " +
            "@idCountryDestination = '"+idCountryDestination+"', " +
            "@countryDestination = '"+countryDestination+"', " +
            "@idStateDestination = '"+idStateDestination+"', " +
            "@idTownDestination = '"+idTownDestination+"', " +
            "@townDestination = '"+townDestination+"', " +
            "@subtotal = '"+subtotal+"', " +
            "@IVA = '"+IVA+"', " +
            "@RET = '"+RET+"', " +
            "@total = '"+total+"', " +
            "@loadingInstructions = '"+loadingInstructions+"', " +
            "@unloadingInstructions = '"+unloadingInstructions+"', " +
            "@status = '"+status+"', " +
            "@stateDestination = '"+stateDestination+"', " +
            "@stateOrigin = '"+stateOrigin+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_CLIENT_TRAVEL_ORDER_FORM: async (_: any, {input}: any) => {
        const {
            idClientTravelOrder,
            idClient,
            name,
            shipmentDate,
            bussinesName,
            fullAddress,
            RFC,
            TAXID,
            idOriginAddres,
            addressOrigin,
            outsideAddressNumberOrigin,
            insideAddressNumberOrigin,
            neighborhoodOrigin,
            zipCodeOrigin,
            idCountryOrigin,
            countryOrigin,
            idStateOrigin,
            idTownOrigin,
            townOrigin,
            idDestinationAddres,
            addressDestination,
            outsideAddressNumberDestination,
            insideAddressNumberDestination,
            neighborhoodDestination,
            zipCodeDestination,
            idCountryDestination,
            countryDestination,
            idStateDestination,
            idTownDestination,
            townDestination,
            subtotal,
            IVA,
            RET,
            total,
            loadingInstructions,
            unloadingInstructions,
            status,
            stateOrigin,
            stateDestination,
        } = input;
        try {
            const message = await clientTravelOrder.query("exec update_clientTravelOrderForm " +
            "@idClientTravelOrder = '"+idClientTravelOrder+"', " +
            "@idClient = '"+idClient+"', " +
            "@name = '"+name+"', " +
            "@shipmentDate = '"+shipmentDate+"', " +
            "@bussinesName = '"+bussinesName+"', " +
            "@fullAddress = '"+fullAddress+"', " +
            "@RFC = '"+RFC+"', " +
            "@TAXID = '"+TAXID+"', " +
            "@idOriginAddres = '"+idOriginAddres+"', " +
            "@addressOrigin = '"+addressOrigin+"', " +
            "@outsideAddressNumberOrigin = '"+outsideAddressNumberOrigin+"', " +
            "@insideAddressNumberOrigin = '"+insideAddressNumberOrigin+"', " +
            "@neighborhoodOrigin = '"+neighborhoodOrigin+"', " +
            "@zipCodeOrigin = '"+zipCodeOrigin+"', " +
            "@idCountryOrigin = '"+idCountryOrigin+"', " +
            "@countryOrigin = '"+countryOrigin+"', " +
            "@idStateOrigin = '"+idStateOrigin+"', " +
            "@idTownOrigin = '"+idTownOrigin+"', " +
            "@townOrigin = '"+townOrigin+"', " +
            "@idDestinationAddres = '"+idDestinationAddres+"', " +
            "@addressDestination = '"+addressDestination+"', " +
            "@outsideAddressNumberDestination = '"+outsideAddressNumberDestination+"', " +
            "@insideAddressNumberDestination = '"+insideAddressNumberDestination+"', " +
            "@neighborhoodDestination = '"+neighborhoodDestination+"', " +
            "@zipCodeDestination = '"+zipCodeDestination+"', " +
            "@idCountryDestination = '"+idCountryDestination+"', " +
            "@countryDestination = '"+countryDestination+"', " +
            "@idStateDestination = '"+idStateDestination+"', " +
            "@idTownDestination = '"+idTownDestination+"', " +
            "@townDestination = '"+townDestination+"', " +
            "@subtotal = '"+subtotal+"', " +
            "@IVA = '"+IVA+"', " +
            "@RET = '"+RET+"', " +
            "@total = '"+total+"', " +
            "@loadingInstructions = '"+loadingInstructions+"', " +
            "@unloadingInstructions = '"+unloadingInstructions+"', " +
            "@status = '"+status+"', " +
            "@stateDestination = '"+stateDestination+"', " +
            "@stateOrigin = '"+stateOrigin+"' ");
            return message
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idClient,userLoggedIn } = input;
        try {
            const newRecord = await clientTravelOrder.query("exec create_clientDocuments @idClient = '"+idClient+"', @userLoggedIn = '"+userLoggedIn+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_LINK_CLIENT_DOCUMENTS: async (_: any, {input}: any) => {
        const { idClient, id, documentLink} = input;
        try {
            await clientTravelOrder.query("exec set_link_document_clientDocuments @idClient = '"+idClient+"', @id = '"+id+"', @documentLink = '"+documentLink+"'");
            return 'Documento actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    }
}

export default ClientTravelOrderMutations;