import PaymentService from "../../services/paymentService";
import { GET_PAYMENT, PUT_PAYMENT } from "../types";

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