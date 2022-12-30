import PaymentService from "../../services/paymentService";
import { GET_PAYMENT, GET_PAYMENT_ID, PUT_PAYMENT } from "../types";

export const getPayment = () =>
  async function (dispatch) {
    try {
      const response = await PaymentService.getPayment();
      dispatch({ type: GET_PAYMENT, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const addPayment = (data) =>
  async function (dispatch) {
    try {
      const response = await PaymentService.addPayment(data);
      dispatch({ type: PUT_PAYMENT, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getPaymentId = (id) =>
  async function (dispatch) {
    try {
      const response = await PaymentService.getPaymentId(id);
      dispatch({ type: GET_PAYMENT_ID, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };