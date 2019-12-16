import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button";
import Input from "./Input";

const styles = StyleSheet.create({
  styleDivOne: {
    width: "50vw",
    height: "auto",
    borderLeft: "4px solid white",
    marginLeft: "5%",
    color: "white",
    marginTop: "7%",
    paddingLeft: "10px",
  },
  button: {
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
    outline: "none",
  },
  styleDivTwo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "10%",
  },
  styleDivThree: {
    color: "white",
    fontWeight: "bold",
    marginBottom: "20%",
    marginRight: "10%",
  },
  styleDivFour: {
    marginBottom: "20%",
  },
});

const Order = (props) => {
  const orderState = props.orderState;
  return (
    <div className={css(styles.styleDivOne)}>
      {orderState.map((orderItem) => (
        <div className={css(styles.styleDivTwo)} key={orderItem.id}>
          <div className={css(styles.styleDivThree)}>
            {orderItem.name}
          </div>
          <div className={css(styles.styleDivThree)}>
            {orderItem.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </div>
          <Input
            className={css(styles.styleDivFour)}
            src="/images/trash.png"
            id="button-send"
            type="image"
          />
        </div>
      ))}
      { orderState.length > 0
        && (
        <Button
          className={css(styles.button)}
          id="button-send"
          title="Enviar"
        />
        )}

    </div>
  );
};
export default Order;
