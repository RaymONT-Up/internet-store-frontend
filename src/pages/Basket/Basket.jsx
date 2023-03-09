import React from "react";
import BasketList from "../../components/BasketList/BasketList";
import Container from "../../components/UI/Container/Container";
import styles from "./Basket.module.scss";

const Basket = () => {
  return (
    <Container>
      <h1>Корзина</h1>
      <BasketList />
    </Container>
  );
};

export default Basket;
