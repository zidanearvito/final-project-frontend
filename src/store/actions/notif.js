import NotifService from "../../services/notifService";
import { DELETE_NOTIF, GET_NOTIF, GET_NOTIF_ID } from "../types";

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

export const getNotifId = (id) =>
  async function (dispatch) {
    try {
      const response = await NotifService.getNotifId(id);
      dispatch({ type: GET_NOTIF_ID, payload: response });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteNotif = (id) =>
  async function (dispatch) {
    try {
      const response = await NotifService.deleteNotifIs(id);
      dispatch({ type: DELETE_NOTIF, payload: response });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
