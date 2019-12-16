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
    width: "100px",
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
  styleSpan: {
    color: "white",
    fontWeight: "bold",
  },
});

const Order = (props) => {
  const orderState = props.orderState;
  const total = orderState.reduce((acc, currentValue) => acc + currentValue.price, 0);

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
            onClick={props.remove}
            className={css(styles.styleDivFour)}
            src="/images/trash.png"
            id={orderItem.id}
            type="image"
          />
        </div>
      ))}
      { orderState.length > 0
        && (
          <div className={css(styles.styleDivTwo)}>
            <Button
              className={css(styles.button)}
              id="button-send"
              title="Enviar"
            />
            <span className={css(styles.styleSpan)}>
              {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </div>
        )}

    </div>
  );
};
export default Order;
