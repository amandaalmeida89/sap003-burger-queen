import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button";
import Input from "./Input";

const styles = StyleSheet.create({
  divOne: {
    width: "50vw",
    height: "auto",
    borderLeft: "4px solid gray",
    color: "white",
    marginTop: "7%",
    "@media (min-width: 1200px)": {
      width: "40vw",
    },
  },
  button: {
    backgroundColor: "rgb(15, 155, 0)",
    ":hover": {
      backgroundColor: "#444444",
      color: "#c7c7cc",
    },
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "6px",
    borderRadius: "6px",
    width: "110px",
    height: "50px",
    textAlign: "center",
    marginTop: "5%",
    outline: "none",
  },
  divTwo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  divThree: {
    color: "white",
    fontWeight: "bold",
    marginBottom: "10%",
    "@media (min-width: 1200px)": {
      fontSize: "22px",
    },
  },
  name: {
    width: "150px",
    "@media only screen and (min-width: 768px) and (max-width: 979px)": {
      width: "100px",
    },
  },
  divFour: {
    marginBottom: "10%",
  },
  total: {
    color: "white",
    fontWeight: "bold",
    marginTop: "5%",
    fontSize: "20px",
    "@media only screen and (min-width: 768px) and (max-width: 979px)": {
      fontSize: "18px",
      "@media (min-width: 1200px)": {
        fontSize: "22px",
      },
    },
  },
  minusSum: {
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
    <div className={css(styles.divOne)}>
      {orderState.map((orderItem) => (
        <div className={css(styles.divTwo)} key={orderItem.id}>
          <div className={css(styles.divThree, styles.name)}>
            {orderItem.name}
          </div>
          <div className={css(styles.divThree)}>
            <Button
              onClick={(e) => {
                props.removeAmountOrder(orderItem);
                e.preventDefault();
              }}
              className={css(styles.minusSum)}
              id="button-minus"
              title="-"
            />
          </div>
          <div className={css(styles.divThree)}>
            {orderItem.count}
          </div>
          <div className={css(styles.divThree)}>
            <Button
              className={css(styles.minusSum)}
              onClick={(e) => {
                props.onItemAdd(orderItem);
                e.preventDefault();
              }}
              id="button-sum"
              title="+"
            />
          </div>
          <div className={css(styles.divThree)}>
            {orderItem.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </div>
          <Input
            onClick={(e) => {
              props.remove(orderItem);
              e.preventDefault();
            }}
            className={css(styles.divFour)}
            src="/images/trash.png"
            id={orderItem.id}
            type="image"
          />
        </div>
      ))}
      {orderState.length > 0
        && (
          <div className={css(styles.divTwo)}>
            <Button
              onClick={(e) => {
                props.createOrder();
                e.preventDefault();
              }}
              className={css(styles.button)}
              id="button-send"
              title="Enviar"
            />
            <div className={css(styles.total)}>
              <div>
                Total:
                {" "}
                {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </div>
            </div>
          </div>
        )}

    </div>
  );
};
export default Order;
