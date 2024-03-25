import { tripOrderProducts } from "../../../db/Entities/tripOrderProducts";

const tripOrderProductsQueries = {

    GET_ALL_TRIP_ORDER_PRODUCTS: async (_: any, {idTripOrder}: any) => {
        try{
            const result = await tripOrderProducts.query("exec get_tripOrderProducts_by_idTripOrder @idTripOrder = '"+ idTripOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tripOrderProductsQueries;