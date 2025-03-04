import { bonuses } from "../../../db/Entities/bonuses";

const bonusesMutations = {
    UPDATE_BONUS: async (_: any, {input}: any) => {
        const { 
            idBonus,
            amount,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await bonuses.query("exec update_bonus " +
            "@idBonus = '"+idBonus+"', " +
            "@amount = '"+amount+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@idEnterprise = '"+idEnterprise+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default bonusesMutations;