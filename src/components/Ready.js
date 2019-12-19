import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  styleCardReady: {
    width: "50vw",
    marginTop: "5%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
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
    fontSize: "20px",
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

  const getDiff = (date2, date1) => {
    const diff = ((date2.getTime() - date1.getTime()) / 1000) / 60;
    if (Math.abs(Math.round(diff)) > 1) {
      return `${Math.abs(Math.round(diff))} minutos`;
    }
    return `${Math.abs(Math.round(diff))} minuto`;
  };

  return (
    <div className={css(styles.styleCardReady)}>
      {readyState.map((readyItem) => (
        <div className={css(styles.styleCards)} key={readyItem.id}>
          <h1>
            {readyItem.name}
          </h1>
          <div className={css(styles.styleItens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.styleItenTableCount)}>
              {readyItem.tableNumber}
            </div>
            <div>
              Preparo:
            </div>
            <div>
              { getDiff(new Date(readyItem.time), new Date(readyItem.addedAt)) }
            </div>
          </div>
          <ul className={css(styles.styleUl)}>
            {readyItem.items.map((item) => (
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
export default Ready;
