import React from "react";
import { useSelector } from "react-redux";
import BrandItem from "./BrandItem/BrandItem";
import styles from "./BrandsBar.module.scss";
const BrandsBar = () => {
  const brands = useSelector(store => store.shop.brands);

  return (
    <ul className={styles.list}>
      {brands.map(item => (
        <BrandItem name={item.name} key={item.id} />
      ))}
    </ul>
  );
};

export default BrandsBar;
