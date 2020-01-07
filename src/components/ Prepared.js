import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  styleCardprepared: {
    width: "50vw",
    marginTop: "5%",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
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

const Prepared = (props) => {
  const preparedState = props.preparedState;

  const getDiff = (date2, date1) => {
    const diff = ((date2.getTime() - date1.getTime()) / 1000) / 60;
    if (Math.abs(Math.round(diff)) > 1) {
      return `${Math.abs(Math.round(diff))} minutos`;
    }
    return `${Math.abs(Math.round(diff))} minuto`;
  };

  return (
    <div className={css(styles.styleCardprepared)}>
      {preparedState.map((preparedItem) => (
        <div className={css(styles.styleCards)} key={preparedItem.id}>
          <h1>
            {preparedItem.name}
          </h1>
          <div className={css(styles.styleItens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.styleItenTableCount)}>
              {preparedItem.tableNumber}
            </div>
            <div>
              Preparo:
            </div>
            <div>
              { getDiff(new Date(preparedItem.time), new Date(preparedItem.addedAt)) }
            </div>
          </div>
          <ul className={css(styles.styleUl)}>
            {preparedItem.items.map((item) => (
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
        </div>
      ))}
    </div>
  );
};
export default Prepared;
