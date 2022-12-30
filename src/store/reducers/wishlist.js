import { CREATE_WISHLIST, DELETE_WISHLIST, GET_WISHLIST } from "../types";

const initialState = {
  data: false,
  dataById: [],
  loading: true,
};

const wishlistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_WISHLIST:
      return {
        ...state,
        //   data: payload.data,
        loading: false,
      };

    case GET_WISHLIST:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case DELETE_WISHLIST:
      return {
        ...state,
        data: payload,
        // loading: false,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
