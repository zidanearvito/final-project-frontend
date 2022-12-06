import { LOGIN, REGISTER, LOGOUT, LOGIN_ADMIN } from "../types/index";

const initialState = {
  data: JSON.parse(localStorage.getItem("name")) || {},
  accessToken: localStorage.getItem("accessToken"),
  roleId: localStorage.getItem("roleId"),
  isLoggedIn: localStorage.getItem("name") ? true : false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        data: payload.data,
        accessToken: payload.accessToken,
        roleId: "",
        isLoggedIn: true,
      };
    case LOGIN_ADMIN:
      return {
        ...state,
        data: payload.data,
        accessToken: payload.accessToken,
        roleId: payload.roleId,
        isLoggedIn: true,
      };
    case REGISTER:
      return {
        ...state,
        data: payload.data,
        accessToken: payload.accessToken,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        data: {},
        accessToken: "",
        roleId: "",
        isLoggedIn: false,
      };
    // case UPDATE_PROFILE:
    //   return {
    //     ...state,
    //     data: payload,
    //   }
    default: {
      return state;
    }
  }
};

export default authReducer;
