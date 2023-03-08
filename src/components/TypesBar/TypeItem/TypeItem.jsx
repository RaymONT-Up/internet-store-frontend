import React from "react";

const TypeItem = props => {
  return <li onClick={props.onSelectedType}>{props.name}</li>;
};

export default TypeItem;
