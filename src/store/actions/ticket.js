import TicketService from "../../services/ticketService";
import {
  GET_TICKET,
  GET_TICKET_ID,
  CREATE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
  SEARCH_TICKET,
} from "../types/index";

export const getTicket = () =>
  async function (dispatch) {
    try {
      const response = await TicketService.getTicket();
      dispatch({ type: GET_TICKET, payload: response });
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const getTicketById = (id) =>
  async function (dispatch) {
    try {
      const response = await TicketService.getTicketById(id);
      dispatch({ type: GET_TICKET_ID, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const createTicket = (params) =>
  async function (dispatch) {
    try {
      const response = await TicketService.createTicket(params);
      dispatch({ type: CREATE_TICKET, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateTicket = (id, params) =>
  async function (dispatch) {
    try {
      const response = await TicketService.updateTicket(id, params);
      dispatch({ type: UPDATE_TICKET, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteTicket = (id) =>
  async function (dispatch) {
    try {
      const response = await TicketService.deleteTicket(id);
      dispatch({ type: DELETE_TICKET, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const searchTicket = (data) =>
  async function (dispatch) {
    try {
      const response = await TicketService.searchTicket(data);
      dispatch({ type: SEARCH_TICKET, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };  
