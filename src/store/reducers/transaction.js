import { GET_TRANSACTION, GET_TRANSACTION_ID } from "../types";

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
      };
    case GET_TRANSACTION_ID:
      return {
        ...state,
        dataById: [payload.data.data],
      };

    default:
      return state;
  }
};

export default transactionReducer
