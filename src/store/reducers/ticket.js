import {
  CREATE_TICKET,
  DELETE_TICKET,
  GET_TICKET,
  GET_TICKET_ID,
  SEARCH_TICKET,
  UPDATE_TICKET,
} from "../types";

const initialState = {
  data: [],
  dataById: [],
  loading: true,
};

const ticketReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TICKET:
      return {
        ...state,
        loading: false,
        data: payload.data,
        message: false,
      };

    case CREATE_TICKET:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case GET_TICKET_ID:
      return {
        ...state,
        dataById: payload.data,
      };

    case UPDATE_TICKET:
      return {
        ...state,
        dataById: payload.data,
      };

    case DELETE_TICKET:
      return {
        ...state,
        dataById: payload.data,
      };

    case SEARCH_TICKET:
      return {
        ...state,
        data: payload.data.data,
      };
    default:
      return state;
  }
};

export default ticketReducer;
