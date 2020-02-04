import React from "react";

const Input = (props) => (
  <input
    maxLength={props.maxLength}
    onChange={props.onChange}
    onClick={props.onClick}
    src={props.src}
    className={props.className}
    type={props.type}
    id={props.id}
    value={props.value}
    placeholder={props.placeholder}
  />
);

export default Input;
