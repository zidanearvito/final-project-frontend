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
  getNotifId: async function (id) {
    try {
      const response = await API.get(`/api/notification/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  deleteNotifIs: async function (id) {
    try {
      const response = await API.delete(`/api/notification/delete/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default NotifService;
