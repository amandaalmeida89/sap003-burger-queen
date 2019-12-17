import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button.js";

const styles = StyleSheet.create({
  styleDivOne: {
    width: "50vw",
    height: "auto",
    marginTop: "5%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
    borderRight: "4px solid gray",
  },
  styleDivTwo: {
    textAlign: "center",
    width: "80%",
    marginBottom: "5%",
    marginRight: "2%",
    marginLeft: "2%",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "gray",
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
    <div className={css(styles.styleDivOne)}>
      {pedingState.map((pedingItem) => (
        <div className={css(styles.styleDivTwo)} key={pedingItem.id}>
          {pedingItem.name}
          <div>
            {pedingItem.tableNumber}
            {pedingItem.addedAt.slice(10, 16)}
          </div>
          {pedingItem.items.map((item) => (
            <div key={item.id}>
              {item.name}
              {item.count}
            </div>
          ))}
          <Button
            className={css(styles.button)}
            id="button-send"
            title="Enviar"
          />
        </div>
      ))}
    </div>
  );
};
export default Pending;
