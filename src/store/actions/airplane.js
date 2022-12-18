import AirplaneService from "../../services/airplaneService"
import {
  GET_AIRPLANE,
  GET_AIRPLANE_ID,
  CREATE_AIRPLANE,
  UPDATE_AIRPLANE,
  DELETE_AIRPLANE,
} from "../types/index";

export const getAirplane = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AirplaneService.getAirplane(params);
      dispatch({ type: GET_AIRPLANE, payload: response });
    //   console.log(response)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export const getAirplaneById = (id) =>
  async function (dispatch) {
    try {
      const response = await AirplaneService.getAirplaneById(id);
      console.log(response);
      dispatch({ type: GET_AIRPLANE_ID, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const createAirplane = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AirplaneService.createAirplane(params);
      dispatch({ type: CREATE_AIRPLANE, payload: response.data });
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateAirplane = (id, params) =>
  async function (dispatch) {
    try {
      const response = await AirplaneService.updateAirplane(id, params);
      // console.log(response)
      dispatch({ type: UPDATE_AIRPLANE, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteAirplane = (id) =>
  async function (dispatch) {
    try {
      const response = await AirplaneService.deleteAirplane(id);
      console.log(response);
      dispatch({ type: DELETE_AIRPLANE, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
