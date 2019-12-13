import React from "react";
import { StyleSheet, css } from "aphrodite";
import Input from "./Input.js";

const styles = StyleSheet.create({
  styleLabel: {
    color: "white",
    fontSize: "25px",
    marginLeft: "3%",
  },
  styleCheckbox: {
    transform: "scale(4)",
    marginBottom: "5%",
  },
  stylePrice: {
    // display:'flex',
    marginRight: "15%",
  },
});

const MenuItem = (props) => {
  const item = props.item;

  return (
    <div key={item.id}>
      <Input className={css(styles.styleCheckbox)} type="checkbox" id={item.id} value={item.id} />
      <label className={css(styles.styleLabel)} htmlFor={item.id}>{item.name}</label>
      <label className={css(styles.styleLabel, styles.stylePrice)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
    </div>
  );
};

export default MenuItem;
