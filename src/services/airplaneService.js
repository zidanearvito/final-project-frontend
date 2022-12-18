import API from "./api";

const AirplaneService = {
  getAirplane: async function (data) {
    try {
      const response = await API.get("/api/airplane", data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createAirplane: async function (data) {
    try {
      const response = await API.post("/api/airplane/create", data);
      return response;
    } catch (error) {
      console.log("Airplane service error", error);
      throw error;
    }
  },

  getAirplaneById: async function (id) {
    try {
      const response = await API.get(`/api/airplane/${id}`);
      return response;
    } catch (err) {
      console.log("Airplane service error", err);
      throw err;
    }
  },

  updateAirplane: async function (id, data) {
    try {
      const response = await API.put(`/api/airplane/update/${id}`, data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log("Airplane service error", error);
      throw error;
    }
  },

  deleteAirplane: async function (id) {
    try {
      const response = await API.delete(`/api/airplane/delete/${id}`);
      return response;
    } catch (err) {
      console.log("Airplane service error", err);
      throw err;
    }
  },
};

export default AirplaneService;
