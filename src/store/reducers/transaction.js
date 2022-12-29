import {
  GET_TRANSACTION,
  GET_TRANSACTION_ID,
  SHOW_LOADER,
  HIDE_LOADER,
  CANCEL_TRANSACTION,
  FILTER_TRANSACTION,
} from "../types";

const initialState = {
  data: false,
  dataById: [],
  loading: true,
};

const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTION:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    case GET_TRANSACTION_ID:
      return {
        ...state,
        dataById: [payload.data.data],
        loading: false,
      };
    case CANCEL_TRANSACTION:
      return {
        ...state,
        data: payload.data,
      };

    case FILTER_TRANSACTION:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default transactionReducer;
