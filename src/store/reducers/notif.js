import { DELETE_NOTIF, GET_NOTIF, GET_NOTIF_ID } from "../types";

const initialState = {
  notif: false,
  loading: true,
  notifId: false,
  //   addPayment: false,
};

const notifReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTIF:
      return {
        ...state,
        notif: payload,
        loading: false,
      };
    case GET_NOTIF_ID:
      return {
        ...state,
        notifId: payload,
        // loading: false,
      };
    case DELETE_NOTIF:
      return {
        ...state,
        notifId: payload,
        // loading: false,
      };
    default:
      return state;
  }
};

export default notifReducer;
