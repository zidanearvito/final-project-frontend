import NotifService from "../../services/notifService";
import { GET_NOTIF } from "../types";

export const getNotif = () =>
  async function (dispatch) {
    try {
      const response = await NotifService.getNotif();
      dispatch({ type: GET_NOTIF, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };