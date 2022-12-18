import CompanyService from "../../services/companyService";
import {
  GET_COMPANY,
  GET_COMPANY_ID,
  CREATE_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
} from "../types/index";

export const getCompany = (params, history) =>
  async function (dispatch) {
    try {
      const response = await CompanyService.getCompany(params);
      dispatch({ type: GET_COMPANY, payload: response });
      // console.log(response)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export const getCompanyById = (id) =>
  async function (dispatch) {
    try {
      const response = await CompanyService.getCompanyById(id);
      console.log(response);
      dispatch({ type: GET_COMPANY_ID, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const createCompany = (params, history) =>
  async function (dispatch) {
    try {
      const response = await CompanyService.createCompany(params);
      dispatch({ type: CREATE_COMPANY, payload: response.data });
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const updateCompany = (id, params) =>
  async function (dispatch) {
    try {
      const response = await CompanyService.updateCompany(id, params);
      // console.log(response)
      dispatch({ type: UPDATE_COMPANY, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const deleteCompany = (id) =>
  async function (dispatch) {
    try {
      const response = await CompanyService.deleteCompany(id);
      console.log(response);
      dispatch({ type: DELETE_COMPANY, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
