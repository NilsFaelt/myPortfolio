import { ACTIONS } from "../actionTypes";

export function grabMailAdress(state = "undefined", action) {
  if (action.type === ACTIONS.GRAB_MAIL_ADRESS) {
    return action.payload.mail;
  } else if (action.type === ACTIONS.CLEAR_MAIL) {
    return "";
  }
  return state;
}
