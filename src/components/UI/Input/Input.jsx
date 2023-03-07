import React from "react";
import styles from "./Input.module.scss";
const Input = props => {
  const classes = `${styles.input} ${props.className ? props.className : ""}`;
  return <input {...props} className={classes} />;
};

export default Input;
