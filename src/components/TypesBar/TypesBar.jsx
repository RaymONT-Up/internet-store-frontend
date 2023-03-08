import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { shopActions } from "../../store/slices/shopSlice";
import Card from "../UI/Card/Card";
import TypeItem from "./TypeItem/TypeItem";
import styles from "./TypesBar.module.scss";
const TypesBar = () => {
  const dispatchAction = useDispatch();
  const types = useSelector(store => store.shop.types);

  const location = useLocation();
  const navigate = useNavigate();

  const typeSelectedHandler = typeId => {
    console.log(typeId, location);
    navigate(`${location.pathname}?typeId=${typeId}`);
    dispatchAction(shopActions.setSelectedType(typeId));
  };

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <aside>
          <ul>
            {types.map(type => (
              <TypeItem
                key={type.id}
                name={type.name}
                onSelectedType={() => typeSelectedHandler(type.id)}
              />
            ))}
          </ul>
        </aside>
      </Card>
    </div>
  );
};

export default TypesBar;
