import React from "react";

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={props.className}
    data-id={props.dataId}
    type={props.type}
    id={props.id}
  >
    {props.title}
  </button>
);
export default Button;
