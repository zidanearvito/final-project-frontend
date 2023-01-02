import { GET_NOTIF } from "../types";

const initialState = {
  notif: false,
  loading: true,
  //   paymentId: false,
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
    default:
      return state;
  }
};

export default notifReducer;
