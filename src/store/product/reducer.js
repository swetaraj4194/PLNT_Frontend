import {
  FETCH_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FETCHED,
  CART_DETAIL_ADD,
  CARTITEM_DELETE_SUCCESS,
  COUNT_CART_QUANTITY,
} from "./action";

const initialState = {
  allProducts: [],
  productDetails: null,
  cartProduct: [],
  cartQuantity: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //fetch all product
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: [...state.allProducts, ...action.payload],
      };

    //fetch details page
    case PRODUCT_DETAILS_FETCHED:
      return { ...state, productDetails: { ...action.payload } };

    //fetch cart data
    case CART_DETAIL_ADD:
      return {
        ...state,
        cartProduct: [...state.cartProduct, ...action.payload],
      };

    // Remove cart item
    case CARTITEM_DELETE_SUCCESS:
      const id = action.payload;
      const newCartItem = state.cartProduct.filter(
        (product) => product.id !== id
      );
      return {
        ...state,
        cartProduct: newCartItem,
        cartQuantity: state.cartQuantity - 1,
      };

    //count cart quantity
    case COUNT_CART_QUANTITY:
      return {
        ...state,
        cartQuantity: state.cartQuantity + action.payload,
      };

    default:
      return state;
  }
}
