import {
    CREATE_COMPANY,
    DELETE_COMPANY,
    GET_COMPANY,
    GET_COMPANY_ID,
    UPDATE_COMPANY,
  } from "../types";
  
  const initialState = {
    data: [],
    dataById: false,
    loading: true
  };
  
  const companyReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_COMPANY:
        return {
          ...state,
          data: payload.data,
          loading: false
        };
  
      case CREATE_COMPANY:
        return {
          ...state,
          data: payload,
        };
      case GET_COMPANY_ID:
        return {
          ...state,
          dataById: payload.data,
        };
  
      case UPDATE_COMPANY:
        return {
          ...state,
          dataById: payload.data,
        };
  
      case DELETE_COMPANY:
        return {
          ...state,
          dataById: payload.data,
        };
      default:
        return state;
    }
  };
  
  export default companyReducer;
  