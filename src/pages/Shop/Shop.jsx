import React from "react";
import styles from "./Shop.module.scss";
import BrandsBar from "../../components/BrandsBar/BrandsBar";
import TypesBar from "../../components/TypesBar/TypesBar";
import Container from "../../components/UI/Container/Container";
import ProductsList from "../../components/ProductsList/ProductsList";

const Shop = () => {
  return (
    <Container className={styles.container}>
      <TypesBar />
      <div className={styles.row}>
        <BrandsBar />
        <ProductsList />
      </div>
    </Container>
  );
};

export default Shop;
