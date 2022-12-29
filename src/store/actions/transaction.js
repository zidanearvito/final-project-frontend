import TransactionService from "../../services/transactionService";
import {
  CANCEL_TRANSACTION,
  CREATE_TRANSACTION,
  FILTER_TRANSACTION,
  GET_TRANSACTION,
  GET_TRANSACTION_ID,
} from "../types";

export const getTransaction = () =>
  async function (dispatch) {
    try {
      const response = await TransactionService.getTransaction();
      dispatch({ type: GET_TRANSACTION, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const getTransactionId = (id) =>
  async function (dispatch) {
    try {
      const response = await TransactionService.getTransactionId(id);
      dispatch({ type: GET_TRANSACTION_ID, payload: response });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const createTransaction = (params) =>
  async function (dispatch) {
    try {
      const response = await TransactionService.createTransaction(params);
      dispatch({ type: CREATE_TRANSACTION, payload: response.data });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const getTransactionUser = () =>
  async function (dispatch) {
    try {
      const response = await TransactionService.getTransactionUser();
      dispatch({ type: GET_TRANSACTION, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const cancelTransaction = (id) =>
  async function (dispatch) {
    try {
      const response = await TransactionService.cancelTransaction(id);
      dispatch({ type: CANCEL_TRANSACTION, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const filterTransaction = (data) =>
  async function (dispatch) {
    try {
      const response = await TransactionService.filterTransaction(data);
      dispatch({ type: FILTER_TRANSACTION, payload: response });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
