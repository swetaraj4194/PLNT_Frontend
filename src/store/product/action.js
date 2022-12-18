import { apiUrl } from "../../../src/config/constants";

import axios from "axios";
import { selectCartProduct } from "./selector";

export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const PRODUCT_DETAILS_FETCHED = "PRODUCT_DETAILS_FETCHED";
export const CART_DETAIL_ADD = "CART_DETAIL_ADD";
export const CARTITEM_DELETE_SUCCESS = "CARTITEM_DELETE_SUCCESS";
export const COUNT_CART_QUANTITY = "COUNT_CART_QUANTITY";

//Fetch all products
export const fetchProductSuccess = (products) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/product`);

      //console.log(response.data);

      dispatch(fetchProductSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// Fetch datails page
const productDetailsFetched = (product) => ({
  type: PRODUCT_DETAILS_FETCHED,
  payload: product,
});

export const fetchProductById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/product/${id}`);
      //   console.log(response.data);
      dispatch(productDetailsFetched(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

//Add Cart Product
const countCartQuantity = (product) => ({
  type: COUNT_CART_QUANTITY,
  payload: product,
});

export const addCartProduct = ({ title, price, description, image }) => {
  return async (dispatch) => {
    try {
      //dispatch(appLoading());

      const response = await axios.post(`${apiUrl}/product/cart`, {
        title,
        price,
        description,
        image,
      });

      dispatch(countCartQuantity(1));
    } catch (e) {
      console.log(e);
    }
  };
};

//Fetch cart product
const cartDetailsAdd = (product) => ({
  type: CART_DETAIL_ADD,
  payload: product,
});

export const fetchCartProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/cart`);

      // console.log(response.data);

      dispatch(cartDetailsAdd(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

//Delete cart product

export const cartItemDeleteSuccess = (id) => ({
  type: CARTITEM_DELETE_SUCCESS,
  payload: id,
});

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${apiUrl}/product/${id}`);

      // console.log("Product deleted?", response);

      dispatch(cartItemDeleteSuccess(id));
    } catch (e) {
      console.error(e);
    }
  };
};
