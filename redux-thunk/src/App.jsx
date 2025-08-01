import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchProducts } from "./ThunkMiddileware";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  console.log(products);
  
  return (
    <>
      {products.length > 0
        ? products.map((product) => (
            <h5 key={product.id}>Product name: {product.title}</h5>
        ))
        : 
        <p>"No Products Found" </p>
        }
    </>
  );
}

export default App;
