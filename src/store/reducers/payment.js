import { GET_PAYMENT, GET_PAYMENT_ID, PUT_PAYMENT } from "../types";

const initialState = {
  payment: false,
  paymentId:false,
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
    case GET_PAYMENT_ID:
      return {
        ...state,
        idPayment: payload.data,
      };
    default:
      return state;
  }
};

export default paymentReducer;
