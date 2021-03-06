import React from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const styles = StyleSheet.create({
  cardPrepared: {
    width: "50vw",
    marginTop: "5%",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
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
    fontSize: "18px",
    fontWeight: "bold",
    "@media (min-width: 1200px)": {
      width: "45%",
      padding: "15px",
      fontSize: "20px",
    },
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
});

const Prepared = (props) => {
  const preparedState = props.preparedState;

  return (
    <main className={css(styles.cardPrepared)}>
      {preparedState.map((preparedItem) => (
        <section className={css(styles.cards)} key={preparedItem.id}>
          <h1>
            {preparedItem.name}
          </h1>
          <div className={css(styles.itens)}>
            <div>
              Mesa:
            </div>
            <div className={css(styles.itemTableCount)}>
              {preparedItem.tableNumber}
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} />
              { props.getDiff(new Date(preparedItem.time), new Date(preparedItem.addedAt)) }
            </div>
          </div>
          <ul className={css(styles.ul)}>
            {preparedItem.items.map((item) => (
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
        </section>
      ))}
    </main>
  );
};
export default Prepared;
