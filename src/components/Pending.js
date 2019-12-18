import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button.js";

const styles = StyleSheet.create({
  styleCard: {
    width: "50vw",
    height: "auto",
    marginTop: "5%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    fontSize: "20px",
    borderRight: "4px solid gray",
  },
  styleCards: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
    marginBottom: "5%",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "gray",
    padding: "6px",
  },
  styleItens: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  styleItenTableCount: {
    width: "50px",
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
});

const Pending = (props) => {
  const pedingState = props.pedingState;

  return (
    <div className={css(styles.styleCard)}>
      {pedingState.map((pedingItem) => (
        <div className={css(styles.styleCards)} key={pedingItem.id}>
          {pedingItem.name}
          <div className={css(styles.styleItens)}>
            <span className={css(styles.styleItenTableCount)}>
              {pedingItem.tableNumber}
            </span>
            <span>
              {pedingItem.addedAt.slice(10)}
            </span>
          </div>
          {pedingItem.items.map((item) => (
            <div className={css(styles.styleItens)} key={item.id}>
              <span className={css(styles.styleItenTableCount)}>
                {item.count}
              </span>
              <span>
                {item.name}
              </span>
            </div>
          ))}
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
