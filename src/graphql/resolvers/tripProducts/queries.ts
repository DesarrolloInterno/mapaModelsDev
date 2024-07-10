import { tripProducts } from "../../../db/Entities/tripProducts";

const tripProductsQueries = {

    GET_ALL_TRIP_ORDER_PRODUCTS_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await tripProducts.query("exec get_tripProducts_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tripProductsQueries;