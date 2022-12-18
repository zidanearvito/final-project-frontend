import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import companyReducer from "./company";
import airplaneReducer from "./airplane";

export default combineReducers({
  authReducer,
  airportReducer,
  companyReducer,
  airplaneReducer,
});
