import API from "./api";

const CompanyService = {
  getCompany: async function (data) {
    try {
      const response = await API.get("/api/company", data);
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createCompany: async function (data) {
    try {
      const headers = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      const response = await API.post("/api/company/create", data, headers);
      return response;
    } catch (error) {
      console.log("Company service error", error);
      throw error;
    }
  },

  getCompanyById: async function (id) {
    try {
      const response = await API.get(`/api/company/${id}`);
      return response;
    } catch (err) {
      console.log("Company service error", err);
      throw err;
    }
  },

  updateCompany: async function (id, data) {
    try {
      const headers = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      const response = await API.put(`/api/company/update/${id}`, data, headers);
      // console.log(response)
      return response;
    } catch (error) {
      console.log("Company service error", error);
      throw error;
    }
  },

  deleteCompany: async function (id) {
    try {
      const response = await API.delete(`/api/company/delete/${id}`);
      return response;
    } catch (err) {
      console.log("Company service error", err);
      throw err;
    }
  },
};

export default CompanyService;
