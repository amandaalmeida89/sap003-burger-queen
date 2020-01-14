import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button.js";

const styles = StyleSheet.create({
  card: {
    width: "50vw",
    marginTop: "5%",
    color: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRight: "4px solid gray",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
    marginBottom: "5%",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "orange",
    padding: "6px",
    fontSize: "20px",
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

const Pending = (props) => {
  const pedingState = props.pedingState;

  return (
    <div className={css(styles.card)}>
      {pedingState.map((pedingItem) => (
        <div className={css(styles.cards)} key={pedingItem.id}>
          <h1>
            {pedingItem.name}
          </h1>
          <div className={css(styles.itens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.itemTableCount)}>
              {pedingItem.tableNumber}
            </div>
            <div>
              {new Date(pedingItem.addedAt).toLocaleTimeString("pt-BR")}
            </div>
          </div>
          <ul className={css(styles.ul)}>
            {pedingItem.items.map((item) => (
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
              props.setOrderAsDone(pedingItem);
              e.preventDefault();
            }}
            className={css(styles.button)}
            id={pedingItem.id}
            title="Enviar"
          />

        </div>
      ))}
    </div>
  );
};
export default Pending;
