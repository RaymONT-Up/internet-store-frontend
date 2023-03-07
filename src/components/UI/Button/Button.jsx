import React from "react";

import styles from "./Button.module.scss";

const Button = props => {
  const classes = `${styles.button} ${props.className ? props.className : ""}`;
  return (
    <button
      {...props}
      type={props.type || "button"}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
