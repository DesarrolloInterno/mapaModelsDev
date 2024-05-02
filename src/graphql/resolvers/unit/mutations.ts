import { unit } from "../../../db/Entities/unit";

const unitMutations = {

    CREATE_UNIT: async (_: any, {input}: any) => {
        const {
            economicNumber,
            idOperator,
            idEnterprise,
            status,
            unitBrand,
            unitModel,
            typeUnit,
            unitLong,
            unitBroad,
            unitWeight,
            licensePlates,
            unitYear,
            numberAxles,
            numberTires,
            color,
            operativeClasification,
            serialNumber,
            insurancePolicy,
            engineBrand,
            engineModel,
            horsePower,
            engineSerialNumber,
            carrierKey,
            permissionType,
            permissionNumber,
            environmentalInsurerPolicy,
            observations,
            idInsurer,
            idEnvironmentalInsurer,
            userLoggedIn
        } = input;

        try {
            const newRecord = await unit.query("exec create_unit " +

                "@economicNumber = '"+ economicNumber + "',"+
                "@idOperator = '" + idOperator + "',"+
                "@idEnterprise = '" + idEnterprise + "',"+
                "@status = '" + status + "',"+
                "@unitBrand = '" + unitBrand + "',"+
                "@unitModel = '" + unitModel + "',"+
                "@typeUnit = '" + typeUnit + "',"+
                "@unitLong = '" + unitLong + "',"+ 
                "@unitBroad = '" + unitBroad + "',"+ 
                "@unitWeight = '" + unitWeight + "',"+ 
                "@licensePlates = '" + licensePlates + "',"+ 
                "@unitYear = '" + unitYear + "',"+ 
                "@numberAxles = '" + numberAxles + "',"+ 
                "@numberTires = '" + numberTires + "',"+
                "@color = '" + color + "',"+
                "@operativeClasification = '" + operativeClasification + "',"+
                "@serialNumber = '" + serialNumber + "',"+
                "@insurancePolicy = '" + insurancePolicy + "',"+
                "@engineBrand = '" + engineBrand + "',"+
                "@engineModel = '" + engineModel + "',"+
                "@horsePower = '" + horsePower + "',"+
                "@engineSerialNumber = '" + engineSerialNumber + "',"+
                "@carrierKey = '" + carrierKey + "',"+
                "@permissionType = '" + permissionType + "',"+
                "@permissionNumber = '" + permissionNumber + "',"+
                "@environmentalInsurerPolicy = '" + environmentalInsurerPolicy + "',"+
                "@observations = '"+ observations + "',"+
                "@idInsurer = '"+ idInsurer + "',"+
                "@idEnvironmentalInsurer = '"+ idEnvironmentalInsurer + "',"+
                "@userLoggedIn = '"+ userLoggedIn + "'"
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    DELETE_UNIT: async (_: any, {input}: any) => {
        const {
            idUnit,
            userLoggedIn
        } = input;

        try {
            await unit.query("exec delete_unit " +
                "@idUnit = '" + idUnit + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_UNIT: async (_: any, {input}: any) => {
        const {
            idUnit,
            economicNumber,
            idOperator,
            idEnterprise,
            status,
            unitBrand,
            unitModel,
            typeUnit,
            unitLong,
            unitBroad,
            unitWeight,
            licensePlates,
            unitYear,
            numberAxles,
            numberTires,
            color,
            operativeClasification,
            serialNumber,
            insurancePolicy,
            engineBrand,
            engineModel,
            horsePower,
            engineSerialNumber,
            carrierKey,
            permissionType,
            permissionNumber,
            environmentalInsurerPolicy,
            observations,
            idInsurer,
            idEnvironmentalInsurer,
            userLoggedIn
        } = input;

        try {
            const newRecord = await unit.query("exec update_unit " +
                "@idUnit = '" + idUnit + "', " +
                "@economicNumber = '" + economicNumber + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@status = '" + status + "', " +
                "@unitBrand = '" + unitBrand + "', " +
                "@unitModel = '" + unitModel + "', " +
                "@typeUnit = '" + typeUnit + "', " +
                "@unitLong = '" + unitLong + "', " +
                "@unitBroad = '" + unitBroad + "', " +
                "@unitWeight = '" + unitWeight + "', " +
                "@licensePlates = '" + licensePlates + "', " +
                "@unitYear = '" + unitYear + "', " +
                "@numberAxles = '" + numberAxles + "', " +
                "@numberTires = '" + numberTires + "', " +
                "@color = '" + color + "', " +
                "@operativeClasification = '" + operativeClasification + "', " +
                "@serialNumber = '" + serialNumber + "', " +
                "@insurancePolicy = '" + insurancePolicy + "', " +
                "@engineBrand = '" + engineBrand + "', " +
                "@engineModel = '" + engineModel + "', " +
                "@horsePower = '" + horsePower + "', " +
                "@engineSerialNumber = '" + engineSerialNumber + "', " +
                "@carrierKey = '" + carrierKey + "', " +
                "@permissionType = '" + permissionType + "', " +
                "@permissionNumber = '" + permissionNumber + "', " +
                "@environmentalInsurerPolicy = '" + environmentalInsurerPolicy + "', " +
                "@observations = '" + observations + "', " +
                "@idInsurer = '" + idInsurer + "', " +
                "@idEnvironmentalInsurer = '" + idEnvironmentalInsurer + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }

    },
    EDIT_UNIT_IMAGES: async (_: any, {input}: any) => {
        const { 
            idDocument,
            idUnit,
            documentLink,
            userLoggedIn
        } = input;
        try {
            await unit.query("exec edit_unitDocuments @idDocument = '"+idDocument+"', @idUnit = '"+idUnit+"', @documentLink = '"+documentLink+"', @userLoggedIn = '"+userLoggedIn+"' ");
            return 'Se ha actualizado el registro';
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_UNIT_DOCUMENTS: async (_: any, {input}: any) => {
        const {
            id,
            userLoggedIn
        } = input;

        try {
            const link = await unit.query("exec delete_unitDocument " +
                "@id = '" + id + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return link;
        } catch (error) {
            console.log(error);
        }

    },
};

export default unitMutations;