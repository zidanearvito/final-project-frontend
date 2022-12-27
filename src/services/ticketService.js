import API from "./api";

const TicketService = {
  getTicket: async function (data) {
    try {
      const response = await API.get("/api/ticket", data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createTicket: async function (data) {
    try {
      const response = await API.post("/api/ticket/create", data);
      return response;
    } catch (error) {
      console.log("Ticket service error", error);
      throw error;
    }
  },

  getTicketById: async function (id) {
    try {
      const response = await API.get(`/api/ticket/${id}`);
      return response;
    } catch (err) {
      console.log("Ticket service error", err);
      throw err;
    }
  },

  updateTicket: async function (id, data) {
    try {
      const response = await API.put(`/api/ticket/update/${id}`, data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log("Ticket service error", error);
      throw error;
    }
  },

  deleteTicket: async function (id) {
    try {
      const response = await API.delete(`/api/ticket/delete/${id}`);
      return response;
    } catch (err) {
      console.log("Ticket service error", err);
      throw err;
    }
  },
  searchTicket: async function (data) {
    try {
      const response = await API.get(`/api/ticket/search/`, {
        params: {...data}
      });
      return response;
    } catch (err) {
      console.log("Ticket service error", err);
      throw err;
    }
  },
};

export default TicketService;
