import { LOGIN, REGISTER, LOGOUT } from '../types/index';

const initialState = {
  data: JSON.parse(localStorage.getItem('name')) || {},
  accessToken: localStorage.getItem('accessToken'),
  isLoggedIn: localStorage.getItem('name') ? true : false,
}

const authReducer = (state = initialState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return {
        ...state,
        data: payload.data,
        accessToken: payload.accessToken,
        isLoggedIn: true
      }
    case REGISTER:
      return {
        ...state,
        data: payload.data,
        accessToken: payload.accessToken,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        data: {},
        accessToken: '',
        isLoggedIn: false
      }
    // case UPDATE_PROFILE:
    //   return {
    //     ...state,
    //     data: payload,
    //   }
    default: {
      return state
    }
  }
}

export default authReducer