import React from "react";

const Input = (props) => (
  <input
    className={props.className}
    data-id={props.dataId}
    type={props.type}
    id={props.id}
    value={props.value}
    placeholder={props.placeholder}
  />
);

export default Input;
