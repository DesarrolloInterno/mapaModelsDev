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
    },
    GET_ALL_RELATED_CREDIT_NOTES_BY_ID_CREDIT_NOTE: async (_: any, {idCreditNote}: any) => {
        try{
            const result = await creditNotes.query("exec get_all_relatedCreditNotes_by_idCreditNote @idCreditNote = '"+ idCreditNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES_TO_BE_MATCHED: async (_: any, {idClient, idEnterprise, folioFilter}: any) => {
        try{
            const result = await creditNotes.query("exec get_all_invoices_to_be_matched @idClient ='"+ idClient + "', @idEnterprise = '"+ idEnterprise +"', @folioFilter ='"+folioFilter+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTES_RELATED_CREDIT_NOTE: async (_: any, {idCreditNote}: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNotes_relatedCreditNotes @idCreditNote = '"+ idCreditNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTE_BY_TOKEN: async (_: any, {token}: any) => {
        try{
            const encrypt = process.env.ENCRYPT;
            const result = await creditNotes.query("exec get_creditNote_by_token @token = '"+ token +"', @encrypt = '"+encrypt+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTE_AMOUNTS: async (_: any, {
        idCreditNote
    }: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNote_amounts @idCreditNote = '"+ idCreditNote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDITNOTESTAMPFORCANCEL: async (_: any, {token}: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNote_for_cancel " +
            "@token = '"+ token +"', " +
            "@encrypt = '"+process.env.ENCRYPT+"' "
            );
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_CREDIT_NOTES_TO_FORWARD: async (_: any, {creditNoteMonth, creditNoteYear, idEnterprise}: any) => {
        try{
            const result = await creditNotes.query("exec get_all_credit_notes_to_forward @creditNoteMonth = '"+ creditNoteMonth +"', @creditNoteYear = '"+ creditNoteYear + "', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CREDIT_NOTE_TERMS_AND_CONDITIONS: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await creditNotes.query("exec get_creditNoteTermsAndConditions @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
}

export default creditNotesQueries;