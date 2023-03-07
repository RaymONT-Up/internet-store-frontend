import React from "react";
import styles from "./BrandItem.module.scss";
const BrandItem = props => {
  return <li className={styles.item}>{props.name}</li>;
};

export default BrandItem;
