import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  cardPrepared: {
    width: "50vw",
    marginTop: "5%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cards: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
    marginBottom: "5%",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "gray",
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

const Delivered = (props) => {
  const deliveredState = props.deliveredState;

  return (
    <div className={css(styles.cardPrepared)}>
      {deliveredState.map((deliveredItem) => (
        <div className={css(styles.cards)} key={deliveredItem.id}>
          <h1>
            {deliveredItem.name}
          </h1>
          <div className={css(styles.itens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.itenTableCount)}>
              {deliveredItem.tableNumber}
            </div>
          </div>
          <ul className={css(styles.ul)}>
            {deliveredItem.items.map((item) => (
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
        </div>
      ))}
    </div>
  );
};
export default Delivered;
