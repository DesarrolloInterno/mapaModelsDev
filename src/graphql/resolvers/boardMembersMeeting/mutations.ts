import { boardMembersMeeting } from "../../../db/Entities/boardMembersMeeting";

const boardMembersMeetingMutations = {

    CREATE_BOARD_MEMBERS_MEETING: async (_: any, {input}: any) => {
        const { idStartingMeeting, name, mail, userLoggedIn, phone  } = input;
        try {
            await boardMembersMeeting.query("exec set_boardMembersMeeting @idStartingMeeting = '"+idStartingMeeting+"', @name = '"+name+"', @mail = '"+mail+"', @userLoggedIn = '"+userLoggedIn+"', @phone = '"+phone+"' ");
            return 'Registro agregado correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_BOARD_MEMBERS_MEETING: async (_: any, {input}: any) => {
        const { idBoardMembersMeeting, idStartingMeeting, name, mail, userLoggedIn, phone } = input;
        try {
            await boardMembersMeeting.query("exec update_boardMembersMeeting @idBoardMembersMeeting = '"+idBoardMembersMeeting+"', @idStartingMeeting = '"+idStartingMeeting+"', @name = '"+name+"', @mail = '"+mail+"', @userLoggedIn = '"+userLoggedIn+"', @phone = '"+phone+"' ");
            return 'Registro actualizado correctamente'
        } catch (error) {
            console.log(error);
        }
    },
};

export default boardMembersMeetingMutations;