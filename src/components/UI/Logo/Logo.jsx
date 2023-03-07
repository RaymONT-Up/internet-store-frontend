import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../../utils/consts";

const Logo = ({ className }) => {
  const classes = `${styles.logo} ${className ? className : ""}`;
  return (
    <Link className={classes} to={SHOP_ROUTE}>
      КупиДевайс
    </Link>
  );
};

export default Logo;
