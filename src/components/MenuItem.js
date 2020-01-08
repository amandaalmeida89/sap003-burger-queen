import React from "react";
import { StyleSheet, css } from "aphrodite";
import Input from "./Input";


const styles = StyleSheet.create({
  divMenuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "6px",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    marginTop: "10%",
  },
  input: {
    marginTop: "10%",
    outline: "none",
  },
});


const MenuItem = (props) => {
  const item = props.item;

  return (
    <div className={css(styles.divMenuItem)} key={item.id}>
      <Input onClick={props.onClick} className={css(styles.input)} src={item.img} type="image" id={item.id} value={item.id} />
      <label className={css(styles.label)} htmlFor={item.id}>{item.name}</label>
      <label className={css(styles.label)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
    </div>
  );
};

export default MenuItem;
