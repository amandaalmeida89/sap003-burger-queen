import React from "react";

const Input = (props) => (
  <input
    onClick={props.onClick}
    src={props.src}
    className={props.className}
    data-id={props.dataId}
    type={props.type}
    id={props.id}
    value={props.value}
    placeholder={props.placeholder}
  />
);

export default Input;
