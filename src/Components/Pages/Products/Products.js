import React from "react";
import ProductsListWithSorting from "../../ProductsListWithSorting/ProductsListWithSorting";
// import s from "./Products.module.css";
import { ProductsContextData } from "../../../context/ProductsContext";
import Title from '../../Title/Title';
import photo from '../../../assets/granos-de-cafe-1.jpg'


const Products = ({ title, description, ingredients }) => {
  return (
    <div>
      <Title imageUrl={photo} titleText='Productos'/>
      <ProductsContextData>
        <ProductsListWithSorting />
      </ProductsContextData>
    </div>
  );
};

export default Products;
