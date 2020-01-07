import React from "react";
import { StyleSheet, css } from "aphrodite";
import Button from "./Button.js";

const styles = StyleSheet.create({
  styleCard: {
    width: "50vw",
    marginTop: "5%",
    color: "black",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
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
    backgroundColor: "orange",
    padding: "6px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  styleItens: {
    display: "flex",
  },
  styleUl: {
    padding: "0px",
  },
  styleItenTableCount: {
    width: "40px",
  },
  button: {
    backgroundColor: "rgb(15, 155, 0)",
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

const Ready = (props) => {
  const deliveryState = props.deliveryState;

  return (
    <div className={css(styles.styleCard)}>
      {deliveryState.map((deliveryItem) => (
        <div className={css(styles.styleCards)} key={deliveryItem.id}>
          <h1>
            {deliveryItem.name}
          </h1>
          <div className={css(styles.styleItens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.styleItenTableCount)}>
              {deliveryItem.tableNumber}
            </div>
          </div>
          <ul className={css(styles.styleUl)}>
            {deliveryItem.items.map((item) => (
              <li className={css(styles.styleItens)} key={item.id}>
                <div className={css(styles.styleItenTableCount)}>
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
