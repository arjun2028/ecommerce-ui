import {
  SELECTED_PRODUCT,
  SET_PRODUCTS,
  REMOVE_PRODUCT,
} from "../actions/ProductAction";
import { combineReducers } from "redux";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        ...action.product,
      };
    case REMOVE_PRODUCT:
      return {};

    default:
      return state;
  }
};

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
