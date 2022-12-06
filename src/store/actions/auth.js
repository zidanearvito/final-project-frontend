import AuthService from "../../services/authService";
import { LOGIN, REGISTER, LOGOUT, LOGIN_ADMIN } from '../types/index';

export const login = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.login(params)
    dispatch({ type: LOGIN, payload: response.data.data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const loginAdmin = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.loginAdmin(params)
    dispatch({ type: LOGIN_ADMIN, payload: response.data.data })
    history('/dashboard/admin')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const register = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.register(params)
    dispatch({ type: REGISTER, payload: response.data.data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const logout = (params, history) => async function (dispatch) {
  try {
    AuthService.logout(params)
    dispatch({ type: LOGOUT })
  } catch (error) {
    console.log(error)
    throw error
  }
}

// export const updateProfile = (params) => async function (dispatch) {
//   try {
//     const response = await AuthService.updateProfile(params)
//     dispatch({ type: UPDATE_PROFILE, payload: response.data })
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }