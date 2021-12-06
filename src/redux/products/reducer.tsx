import {
  ADD_CART,
  CATEGORY_PRODUCT,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  REMOVE_CART,
  REMOVE_NUMBER_CART,
} from "./types";

const initialState = {
  products: [],
  product: {},
  cart: [],
};

export const ProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case CATEGORY_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_CART:
      return {
        ...state,
        cart: handleCart(state, action),
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((i: any) => i.id != action.payload),
      };
    case REMOVE_NUMBER_CART:
      return {
        ...state,
        cart: state.cart.map((i: any) => {
          if (i.id == action.payload && i.qty > 1) i.qty--;
          return i;
        }),
      };

    default:
      return state;
  }
};
function handleCart(
  state: { products: any[]; product: {}; cart: any[] },
  action: any
) {
  const temp = state.cart.map((i) => {
    if (i.id == action.payload.id) {
      i.qty = i.qty + action.payload.qty;
    }
    return i;
  });
  let flag = false;
  for (let e of temp) {
    if (e.id == action.payload.id) flag = true;
  }
  if (flag == false)
    temp.push(
      ...state.products
        .filter((e) => e.id == action.payload.id)
        .map((e: any) => {
          return { ...e, qty: action.payload.qty };
        })
    );
  return temp;
}
