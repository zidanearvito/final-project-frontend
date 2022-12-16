import API from "./api";

const AirportService = {
  getAirport: async function (data) {
    try {
      const response = await API.get("/api/airport", data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createAirport: async function (data) {
    try {
      const response = await API.post("/api/airport/create", data);
      return response;
    } catch (error) {
      console.log("Airport service error", error);
      throw error;
    }
  },

  getAirportById: async function (id) {
    try {
      const response = await API.get(`/api/airport/${id}`);
      return response;
    } catch (err) {
      console.log("Airport service error", err);
      throw err;
    }
  },

  updateAirport: async function (id, data) {
    try {
      const response = await API.put(`/api/airport/update/${id}`, data);
      // console.log(response)
      return response;
    } catch (error) {
      console.log("Airport service error", error);
      throw error;
    }
  },

  deleteAirport: async function (id) {
    try {
      const response = await API.delete(`/api/airport/delete/${id}`);
      return response;
    } catch (err) {
      console.log("Airport service error", err);
      throw err;
    }
  },
};

export default AirportService;
