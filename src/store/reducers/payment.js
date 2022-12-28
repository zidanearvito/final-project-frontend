import { GET_PAYMENT, PUT_PAYMENT } from "../types";

const initialState = {
  payment: false,
  addPayment: false,
};

const paymentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PAYMENT:
      return {
        ...state,
        payment: payload.data,
      };
    case PUT_PAYMENT:
      return {
        ...state,
        addPayment: payload.data,
      };
    default:
      return state;
  }
};

export default paymentReducer;
