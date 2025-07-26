import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCT_LOADING" });

    try {
      const res = await axios.get("https://dummyjson.com/products");
      const products =  res.data.products;
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", error: error.message });
    }
  };
};
