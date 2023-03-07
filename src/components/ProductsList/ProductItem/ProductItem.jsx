import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./ProductItem.module.scss";

const ProductItem = props => {
  return <Card className={styles.item}>{props.name}</Card>;
};

export default ProductItem;
