import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button.js";

const styles = StyleSheet.create({
  card: {
    marginTop: "5%",
    color: "black",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "35%",
    marginBottom: "3%",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "orange",
    padding: "6px",
    marginRight: "2%",
    fontSize: "18px",
    fontWeight: "bold",
  },
  itens: {
    display: "flex",
  },
  ul: {
    padding: "0px",
  },
  itemTableCount: {
    width: "40px",
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
});

const Ready = (props) => {
  const deliveryState = props.deliveryState;

  return (
    <div className={css(styles.card)}>
      {deliveryState.map((deliveryItem) => (
        <div className={css(styles.cards)} key={deliveryItem.id}>
          <h1>
            {deliveryItem.name}
          </h1>
          <div className={css(styles.itens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.itemTableCount)}>
              {deliveryItem.tableNumber}
            </div>
          </div>
          <ul className={css(styles.ul)}>
            {deliveryItem.items.map((item) => (
              <li className={css(styles.itens)} key={item.id}>
                <div className={css(styles.itemTableCount)}>
                  {item.count}
                </div>
                <div>
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
          <Button
            onClick={(e) => {
              props.setDeliveryAsDone(deliveryItem);
              e.preventDefault();
            }}
            className={css(styles.button)}
            id={deliveryItem.id}
            title="Entregar"
          />
        </div>
      ))}
    </div>
  );
};

export default Ready;
