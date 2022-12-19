import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import companyReducer from "./company";
import airplaneReducer from "./airplane";
import ticketReducer from "./ticket";

export default combineReducers({
  authReducer,
  airportReducer,
  companyReducer,
  airplaneReducer,
  ticketReducer
});
