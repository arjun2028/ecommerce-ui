export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    product,
  };
};

export const removeselectedProduct = () => {
  return {
    type: REMOVE_PRODUCT,
  };
};
