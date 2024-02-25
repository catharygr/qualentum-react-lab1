import axios from "axios";
import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
  PRODUCTS_GET_PRODUCTS,
} from "../redux/actions/actionTypes";

const API_URL = "http://localhost:3000/products";

export const addProductAction = (newProduct) => async (dispatch) => {
  try {
    await axios.post(API_URL, newProduct);
    dispatch({
      type: PRODUCTS_ADD_PRODUCT,
      payload: newProduct,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const removeProductAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({
      type: PRODUCTS_DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProductAction = (id) => {};

export const getProductsAction = () => async (dispatch) => {
  try {
    const fetchData = await axios.get(API_URL);
    dispatch({
      type: PRODUCTS_GET_PRODUCTS,
      payload: fetchData.data,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
