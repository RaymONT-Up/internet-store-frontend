import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./Products.module.scss";

const ProductsList = props => {
  const products = useSelector(store => store.shop.products);
  return (
    <div className={styles.list}>
      {products.map(product => (
        <ProductItem key={product.id} id={product.id} name={product.name} />
      ))}
    </div>
  );
};

export default ProductsList;
