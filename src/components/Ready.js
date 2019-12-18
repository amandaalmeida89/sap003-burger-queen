import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  styleCardReady: {
    width: "50vw",
    height: "auto",
    marginTop: "5%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    fontSize: "20px",
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

const Ready = (props) => {
  const readyState = props.readyState;
  return (
    <div className={css(styles.styleCardReady)}>
      {readyState.map((readyItem) => (
        <div className={css(styles.styleCards)} key={readyItem.id}>
          {readyItem.name}
          <div className={css(styles.styleItens)}>
            <span className={css(styles.styleItenTableCount)}>
              {readyItem.tableNumber}
            </span>
            <span>
              {readyItem.addedAt.slice(10) }
            </span>
          </div>
          {readyItem.items.map((item) => (
            <div className={css(styles.styleItens)} key={item.id}>
              <span className={css(styles.styleItenTableCount)}>
                {item.count}
              </span>
              <span>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Ready;
