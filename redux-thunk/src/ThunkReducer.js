const initialstate = {
  loading: false,
  products: [],
  error: null,
};

function ThunkReducer(state = initialstate, action) {
  switch (action.type) {
    case "FETCH_PRODUCT_LOADING":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}

export default ThunkReducer;
