import React from "react";
import "./Products.scss";

import { ProductType } from "../FakerData/FakerData";
import ProductItem from "./Item";

interface ProductsInterface {
  products: ProductType[];
}

const Products = ({ products }: ProductsInterface) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!</div>
      ) : (
        <div className="product_results">
          {products.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default Products;