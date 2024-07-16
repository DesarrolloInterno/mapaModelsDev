import { clientTravelOrderProducts } from "../../../db/Entities/clientTravelOrderProducts";

const clientTravelOrderProductsQueries = {

    GET_ALL_CLIENT_TRAVEL_ORDER_PRODUCTS: async (_: any, {idClientTravelOrder}: any) => {
        try{
            const result = await clientTravelOrderProducts.query("exec get_clientTravelOrderProducts_by_idClientTravelOrder @idClientTravelOrder = '"+ idClientTravelOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default clientTravelOrderProductsQueries;