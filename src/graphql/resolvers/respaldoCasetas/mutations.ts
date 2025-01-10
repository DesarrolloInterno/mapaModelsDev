import { respaldoCasetas } from "../../../db/Entities/respaldoCasetas";

const respaldoCasetasMutations = {
    CREATE_RESPALDO_CASETAS_EXCEL: async (_: any, {input}: any) => {
        const { 
            nombreFormatoVenta,
            orden,
            IDRuta,
            ruta,
            origen,
            destino,
            tipo,
            idEnterprise
        } = input;
        try {
            const newid = await respaldoCasetas.query("exec create_respaldo_casetas_excel " +
                "@nombreFormatoVenta = '" + nombreFormatoVenta + "', " +
                "@orden = '"+ orden + "', " +
                "@IDRuta = '"+ IDRuta + "', " +
                "@ruta = '"+ ruta + "', " +
                "@origen = '"+ origen + "', " +
                "@destino = '"+ destino + "', " +
                "@tipo = '"+ tipo + "', " +
                "@idEnterprise = '"+ idEnterprise + "' ");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    }
};

export default respaldoCasetasMutations;