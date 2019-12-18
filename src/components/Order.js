import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button";
import Input from "./Input";

const styles = StyleSheet.create({
  styleDivOne: {
    width: "50vw",
    height: "100vw",
    borderLeft: "4px solid gray",
    marginLeft: "5%",
    color: "white",
    marginTop: "7%",
    paddingLeft: "10px",
  },
  button: {
    backgroundColor: "rgb(99, 188, 80)",
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
    justifyContent: "space-around",
    marginRight: "10%",
  },
  styleDivThree: {
    color: "white",
    fontWeight: "bold",
    marginBottom: "20%",
    marginRight: "10%",
  },
  styleName: {
    width: "100px",
  },
  styleDivFour: {
    marginBottom: "20%",
  },
  styleSpan: {
    color: "white",
    fontWeight: "bold",
  },
  styleMinusSum: {
    borderRadius: "6px",
    backgroundColor: "orange",
    fontWeight: "bold",
    fontSize: "25px",
    width: "30px",
  },
});

const Order = (props) => {
  const orderState = props.orderState;
  const total = props.total;

  return (
    <div className={css(styles.styleDivOne)}>
      {orderState.map((orderItem) => (
        <div className={css(styles.styleDivTwo)} key={orderItem.id}>
          <div className={css(styles.styleDivThree, styles.styleName)}>
            {orderItem.name}
          </div>
          <div className={css(styles.styleDivThree)}>
            <Button
              onClick={(e) => {
                props.removeAmountOrder(orderItem);
                e.preventDefault();
              }}
              className={css(styles.styleMinusSum)}
              id="button-minus"
              title="-"
            />
          </div>
          <div className={css(styles.styleDivThree)}>
            {orderItem.count}
          </div>
          <div className={css(styles.styleDivThree)}>
            <Button
              className={css(styles.styleMinusSum)}
              onClick={(e) => {
                props.onItemAdd(orderItem);
                e.preventDefault();
              }}
              id="button-sum"
              title="+"
            />
          </div>
          <div className={css(styles.styleDivThree)}>
            {orderItem.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </div>
          <Input
            onClick={(e) => {
              props.remove(orderItem);
              e.preventDefault();
            }}
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
              onClick={(e) => {
                props.createOrder();
                e.preventDefault();
              }}
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
