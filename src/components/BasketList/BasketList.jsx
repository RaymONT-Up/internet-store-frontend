import React from "react";
import Card from "../UI/Card/Card";
import BasketItem from "./BasketItem/BasketItem";
import styles from "./BasketList.module.scss";
const DUMMY_BASKET = [{ id: 1, name: "1" }];
const BasketList = () => {
  return (
    <Card>
      <ul>
        {DUMMY_BASKET.map(item => (
          <BasketItem key={item.id} name={item.name} />
        ))}
      </ul>
    </Card>
  );
};

export default BasketList;
