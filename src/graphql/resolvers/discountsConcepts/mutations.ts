import { discountsConcepts } from "../../../db/Entities/discountsConcepts";

const discountsConceptsMutations = {
    CREATE_DISCOUNT_CONCEPT: async (_: any, {input}: any) => {
        const { 
            name,
            description,
            userLoggedIn,
            idEnterprise,
        } = input;
        try {
            const newRecord = await discountsConcepts.query("exec create_discountConcept " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_DISCOUNT_CONCEPT: async (_: any, {input}: any) => {
        const {
            idDiscountConcept,
            name,
            description,
            userLoggedIn,
            idEnterprise,
        } = input;
        try {
            const newRecord = await discountsConcepts.query("exec update_discountConcept " +
                "@idDiscountConcept = '" + idDiscountConcept + "', " +
                "@name = '" + name + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_DISCOUNT_CONCEPT: async (_: any, {input}: any) => {
        const {
            idDiscountConcept,
            userLoggedIn
        } = input;
        try {
            const newRecord = await discountsConcepts.query("exec delete_discountConcept " +
                "@idDiscountConcept = '" + idDiscountConcept + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default discountsConceptsMutations;