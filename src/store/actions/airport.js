import AirportService from "../../services/airportService";
import { GET_AIRPORT, CREATE_AIRPORT, GET_AIRPORT_ID, UPDATE_AIRPORT, DELETE_AIRPORT } from "../types/index";

export const getAirport = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AirportService.getAirport(params);
      dispatch({ type: GET_AIRPORT, payload: response });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export const getAirportById = (id) =>
  async function (dispatch) {
    try {
      const response = await AirportService.getAirportById(id);
      console.log(response);
      dispatch({ type: GET_AIRPORT_ID, payload: response.data });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const createAirport = (params, history) =>
  async function (dispatch) {
    try {
      const response = await AirportService.createAirport(params);
      dispatch({ type: CREATE_AIRPORT, payload: response.data });
      return
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const updateAirport = (id, params) =>
  async function (dispatch) {
    try {
      const response = await AirportService.updateAirport(id, params);
      // console.log(response)
      dispatch({ type: UPDATE_AIRPORT, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const deleteAirport = (id) =>
  async function (dispatch) {
    try {
      const response = await AirportService.deleteAirport(id);
      console.log(response);
      dispatch({ type: DELETE_AIRPORT, payload: response });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
