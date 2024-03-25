import { boothRoutes_tollBooths } from "../../../db/Entities/boothRoutesTollBooths";

const boothRoutesTollBoothsQueries = {

    GET_BOOTHROUTES_TOLLBOOTHS_BY_ID: async (_: any, {idBoothRoute}: any) => {
        try{
            const result = await boothRoutes_tollBooths.query("exec get_boothRoutes_tollBooths_by_idBoothRoutes @idBoothRoute = '"+ idBoothRoute +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default boothRoutesTollBoothsQueries;