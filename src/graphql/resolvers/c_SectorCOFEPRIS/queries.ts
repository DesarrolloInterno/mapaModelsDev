import {c_SectorCOFEPRIS} from "../../../db/Entities/c_SectorCOFEPRIS";

const c_SectorCOFEPRISQueries = {

    GET_ALL_C_SECTOR_COFEPRIS: async (_: any, {clave, description, status}: any) => {
        try{
            const result = await c_SectorCOFEPRIS.query("exec get_all_c_SectorCOFEPRIS @clave = '"+ clave +"', @description = '"+ description +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default c_SectorCOFEPRISQueries;