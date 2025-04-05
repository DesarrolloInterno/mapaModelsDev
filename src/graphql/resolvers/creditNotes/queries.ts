import { creditNotes } from "../../../db/Entities/creditNotes";

const creditNotesQueries = {
    GET_ALL_CREDIT_NOTES: async (_: any, {
        date1,
        date2,
        date,
        idEnterprise
    }: any) => {
        try{
            const result = await creditNotes.query("exec get_all_creditNotes " +
            "@date1 = '"+ date1 +"', " +
            "@date2 = '"+ date2 +"', " +
            "@date = '"+ date +"', " +
            "@idEnterprise = '"+ idEnterprise +"' "
            );
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTE_BY_ID: async (_: any, {idCreditNote, idEnterprise}: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNote_by_id @idCreditNote = '"+ idCreditNote +"', @idEnterprise = '"+idEnterprise+"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTE_AMOUNTS_BY_ID: async (_: any, {
        idCreditNote
    }: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNote_Amounts_by_id @idCreditNote = '"+ idCreditNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTE_DOCUMENT: async (_: any, {idCreditNote}: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNoteDocument @idCreditNote = '"+ idCreditNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default creditNotesQueries;