import WishlistService from "../../services/wishlistService";
import { CREATE_WISHLIST, DELETE_WISHLIST, GET_WISHLIST } from "../types";

export const createWishlist = (data) =>
  async function (dispatch) {
    try {
      const response = await WishlistService.createWishlist(data);
      dispatch({ type: CREATE_WISHLIST, payload: response.data });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const getWishlist = () =>
  async function (dispatch) {
    try {
      const response = await WishlistService.getWishlist();
      dispatch({ type: GET_WISHLIST, payload: response.data });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const deleteWishlist = (id) =>
  async function (dispatch) {
    try {
      const response = await WishlistService.deleteWishlist(id);
      dispatch({ type: DELETE_WISHLIST, payload: response.data });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
