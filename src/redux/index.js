import { combineReducers } from "redux";
import { grabMailAdress } from "./Reducers/grabMailAdress";

export const reducers = combineReducers({
  grabMailAdress: grabMailAdress,
});
