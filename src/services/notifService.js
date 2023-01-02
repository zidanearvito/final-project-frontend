import API from "./api";

const NotifService = {
  getNotif: async function () {
    try {
      const response = await API.get("/api/notification");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default NotifService;
