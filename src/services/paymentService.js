import API from "./api";

const PaymentService = {
  getPayment: async function () {
    try {
      const response = await API.get("/api/payment");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  addPayment: async function (data) {
    try {
      const response = await API.put("/api/payment", data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
}
export default PaymentService