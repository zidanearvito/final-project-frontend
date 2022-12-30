import { combineReducers } from "redux";
import authReducer from "./auth";
import airportReducer from "./airport";
import companyReducer from "./company";
import airplaneReducer from "./airplane";
import ticketReducer from "./ticket";
import transactionReducer from "./transaction";
import paymentReducer from "./payment";
import wishlistReducer from "./wishlist";

export default combineReducers({
  authReducer,
  airportReducer,
  companyReducer,
  airplaneReducer,
  ticketReducer,
  transactionReducer,
  paymentReducer,
  wishlistReducer,
});
