import { GET_TRANSACTION, GET_TRANSACTION_ID, SHOW_LOADER, HIDE_LOADER } from "../types";

const initialState = {
  data: false,
  dataById: [],
  loading: false,
};

const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTION:
      return {
        ...state,
        data: payload.data,
      };
    case GET_TRANSACTION_ID:
      return {
        ...state,
        dataById: [payload.data.data],
        loading: true
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

export default transactionReducer
