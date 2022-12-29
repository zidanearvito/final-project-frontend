import { SHOW_LOADER, HIDE_LOADER } from "../types";
export const showLoader = () =>
  async function (dispatch) {
    dispatch({ type: SHOW_LOADER });
  };

export const hideLoader = () =>
  async function (dispatch) {
    dispatch({ type: HIDE_LOADER });
  };
