import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductsList from "../ProductsList/ProductsList";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import s from "./ProductsListWithSorting.module.css";

const ProductsListWithSorting = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const handleChange = (e) => {
    let sortedProducts;
    if (e.target.value === "name") {
      sortedProducts = [...products].sort((productA, productB) => {
        return productA.name.localeCompare(productB.name);
      });
    }
    if (e.target.value === "price") {
      sortedProducts = [...products].sort((productA, productB) => {
        return productA.price - productB.price;
      });
    }
    setProducts(sortedProducts);
  };

  return (
    <div className={s.container}>
      <FormControl sx={{ paddingBlock: "2rem" }}>
        <FormLabel
          disabled
          id="demo-radio-buttons-group-label"
          sx={{
            borderBottom: "1px solid black",
            paddingBottom: ".6rem",
            marginBottom: ".4rem",
          }}
        >
          ORDENAR POR
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={(e) => handleChange(e)}
        >
          <FormControlLabel
            value="name"
            control={<Radio size="small" color="default" />}
            label="Nombre"
          />
          <FormControlLabel
            value="price"
            control={<Radio size="small" color="default" />}
            label="Precio"
          />
        </RadioGroup>
      </FormControl>
      <ProductsList />
    </div>
  );
};

export default ProductsListWithSorting;
