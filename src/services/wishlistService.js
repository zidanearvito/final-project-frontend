import API from "./api";

const WishlistService = {
  getWishlist: async function () {
    try {
      const response = await API.get("/api/whistlist/");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  createWishlist: async function (data) {
    try {
      const response = await API.post("/api/whistlist/create", data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  deleteWishlist: async function (id) {
    try {
      const response = await API.delete(`/api/whistlist/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default WishlistService;
