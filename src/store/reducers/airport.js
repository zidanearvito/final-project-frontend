import {
  CREATE_AIRPORT,
  DELETE_AIRPORT,
  GET_AIRPORT,
  GET_AIRPORT_ID,
  UPDATE_AIRPORT,
} from "../types";

const initialState = {
  data: [],
  dataById: false,
  loading: true
};

const airportReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_AIRPORT:
      return {
        ...state,
        data: payload.data,
        loading: false
      };

    case CREATE_AIRPORT:
      return {
        ...state,
        data: payload,
      };
    case GET_AIRPORT_ID:
      return {
        ...state,
        dataById: payload.data,
      };

    case UPDATE_AIRPORT:
      return {
        ...state,
        dataById: payload.data,
      };

    case DELETE_AIRPORT:
      return {
        ...state,
        dataById: payload.data,
      };
    default:
      return state;
  }
};

export default airportReducer;
