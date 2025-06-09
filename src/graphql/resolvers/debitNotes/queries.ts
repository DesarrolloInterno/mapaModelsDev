import { debitNotes } from "../../../db/Entities/debitNotes";

const debitNotesQueries = {
    GET_ALL_DEBIT_NOTES: async (_: any, {
        date1,
        date2,
        date,
        idEnterprise
    }: any) => {
        try{
            const result = await debitNotes.query("exec get_all_debitNotes " +
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
    GET_DEBIT_NOTE_BY_ID: async (_: any, {idDebitNote, idEnterprise}: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNote_by_id @idDebitNote = '"+ idDebitNote +"', @idEnterprise = '"+idEnterprise+"' ");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBIT_NOTE_AMOUNTS_BY_ID: async (_: any, {
        idDebitNote
    }: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNote_Amounts_by_id @idDebitNote = '"+ idDebitNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBIT_NOTE_DOCUMENT: async (_: any, {idDebitNote}: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNoteDocument @idDebitNote = '"+ idDebitNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_RELATED_DEBIT_NOTES_BY_ID_DEBIT_NOTE: async (_: any, {idDebitNote}: any) => {
        try{
            const result = await debitNotes.query("exec get_all_relatedDebitNotes_by_idDebitNote @idDebitNote = '"+ idDebitNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBIT_NOTES_RELATED_DEBIT_NOTE: async (_: any, {idDebitNote}: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNotes_relatedDebitNotes @idDebitNote = '"+ idDebitNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBIT_NOTE_BY_TOKEN: async (_: any, {token}: any) => {
        try{
            const encrypt = process.env.ENCRYPT;
            const result = await debitNotes.query("exec get_debitNote_by_token @token = '"+ token +"', @encrypt = '"+encrypt+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBIT_NOTE_AMOUNTS: async (_: any, {
        idDebitNote
    }: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNote_amounts @idDebitNote = '"+ idDebitNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBITNOTESTAMPFORCANCEL: async (_: any, {token}: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNote_for_cancel " +
            "@token = '"+ token +"', " +
            "@encrypt = '"+process.env.ENCRYPT+"' "
            );
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES_TO_BE_MATCHED_CREDIT_NOTES: async (_: any, {idClient, idEnterprise, folioFilter}: any) => {
        try{
            const result = await debitNotes.query("exec get_all_invoices_to_be_matched_debitNotes @idClient ='"+ idClient + "', @idEnterprise = '"+ idEnterprise +"', @folioFilter ='"+folioFilter+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_DEBIT_NOTES_TO_FORWARD: async (_: any, {debitNoteMonth, debitNoteYear, idEnterprise}: any) => {
        try{
            const result = await debitNotes.query("exec get_all_debit_notes_to_forward @debitNoteMonth = '"+ debitNoteMonth +"', @debitNoteYear = '"+ debitNoteYear + "', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DEBIT_NOTE_TERMS_AND_CONDITIONS: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await debitNotes.query("exec get_debitNoteTermsAndConditions @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default debitNotesQueries;