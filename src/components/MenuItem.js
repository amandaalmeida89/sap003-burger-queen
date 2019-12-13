import React from "react";
import { StyleSheet, css } from "aphrodite";
import Input from "./Input";


const styles = StyleSheet.create({
  styleDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  styleLabel: {
    color: "white",
    fontWeight: "bold",
  },
});

const MenuItem = (props) => {
  const item = props.item;

  return (
    <div className={css(styles.styleDiv)} key={item.id}>
      <Input src={item.img} type="image" id={item.id} value={item.id} />
      <label className={css(styles.styleLabel)} htmlFor={item.id}>{item.name}</label>
      <label className={css(styles.styleLabel)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
    </div>
  );
};

export default MenuItem;
