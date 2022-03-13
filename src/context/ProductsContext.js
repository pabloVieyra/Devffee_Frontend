import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsContextData = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://devffee-backend.herokuapp.com/coffees").then((res) => {
        setProducts(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextData };
