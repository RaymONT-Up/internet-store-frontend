import React from "react";
import styles from "./Container.module.scss";
const Container = props => {
  const classes = `${styles.container} ${
    props.className ? props.className : ""
  }`;

  return (
    <div style={props.style} className={classes}>
      {props.children}
    </div>
  );
};

export default Container;
