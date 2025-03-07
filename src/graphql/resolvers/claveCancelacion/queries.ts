import { claveCancelacion } from "../../../db/Entities/claveCancelacion";

const claveCancelacionQueries = {
    GET_ALL_CANCELLATION_CODES: async (_: any) => {
        try{
            const result = await claveCancelacion.query("exec get_all_cancellationCodes");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default claveCancelacionQueries;