import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import companyReducer from "./company";

export default combineReducers({
    authReducer, airportReducer, companyReducer
})