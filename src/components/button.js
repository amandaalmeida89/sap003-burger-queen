import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#ff9500",
    ":hover": {
      backgroundColor: "#444444",
      color: "#c7c7cc",
    },
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "6px",
    borderRadius: "6px",
    textAlign: "center",
    marginTop: "5%",
  },
});

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={css(styles.buttons)}
    data-id={props.dataId}
    type={props.type}
    id={props.id}
  >
    {props.title}
  </button>
);
export default Button;
