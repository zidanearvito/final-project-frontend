import API from "./api";

const TransactionService = {
  getTransaction: async function () {
    try {
      const response = await API.get("/api/transaction/admin");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getTransactionIdAdmin: async function (id) {
    try {
      const response = await API.get(`/api/transaction/admin/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createTransaction: async function (data) {
    try {
      const response = await API.post("/api/transaction/add/", data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getTransactionId: async function (id) {
    try {
      const response = await API.get(`/api/transaction/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getTransactionUser: async function () {
    try {
      const response = await API.get("/api/transaction/");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default TransactionService;
