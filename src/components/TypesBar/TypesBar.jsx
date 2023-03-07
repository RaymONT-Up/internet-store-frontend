import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card/Card";
import styles from "./TypesBar.module.scss";
const TypesBar = () => {
  const types = useSelector(store => store.shop.types);
  return (
    <Card>
      <aside>
        <ul>
          {types.map(type => (
            <li key={type.id}>{type.name}</li>
          ))}
        </ul>
      </aside>
    </Card>
  );
};

export default TypesBar;
