import {
  CREATE_AIRPLANE,
  DELETE_AIRPLANE,
  GET_AIRPLANE,
  GET_AIRPLANE_ID,
  UPDATE_AIRPLANE,
} from "../types";

const initialState = {
  data: [],
  dataById: false,
  loading: true,
};

const airplaneReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_AIRPLANE:
      return {
        ...state,
        loading: false,
        data: payload.data,
        message: false
      };

    case CREATE_AIRPLANE:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case GET_AIRPLANE_ID:
      return {
        ...state,
        dataById: payload.data,
      };

    case UPDATE_AIRPLANE:
      return {
        ...state,
        dataById: payload.data,
      };

    case DELETE_AIRPLANE:
      return {
        ...state,
        dataById: payload.data,
      };
    default:
      return state;
  }
};

export default airplaneReducer;
