import axios from "axios";
import {
  ADD_CART,
  CATEGORY_PRODUCT,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  REMOVE_CART,
  REMOVE_NUMBER_CART,
} from "./types";
export const FetchProducts = () => (dispatch: any) => {
  axios.get("https://fakestoreapi.com/products?limit=8").then((res) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  });
};

export const FetchProduct =
  (id: string | number | undefined) => (dispatch: any) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      dispatch({
        type: FETCH_PRODUCT,
        payload: res.data,
      });
    });
  };

export const FetchCategoryProduct = (category: string) => (dispatch: any) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      dispatch({
        type: CATEGORY_PRODUCT,
        payload: res.data,
      });
    });
};

export const AddProductToCart =
  (id: number | string | undefined, qty: number | string) =>
  (dispatch: any) => {
    console.log(id, typeof qty);

    dispatch({
      type: ADD_CART,
      payload: {
        id: id,
        qty: Number(qty),
      },
    });
  };

export const RemoveProductFromCart = (id: any) => (dispatch: any) => {
  dispatch({
    type: REMOVE_CART,
    payload: id,
  });
};

export const DecreaseCart = (id: any) => (dispatch: any) => {
  dispatch({
    type: REMOVE_NUMBER_CART,
    payload: id,
  });
};
