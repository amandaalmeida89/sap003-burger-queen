import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  styleDiv: {
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    backgroundColor: "#333333",
    ":hover": {
      backgroundColor: "#444444",
      color: "#c7c7cc",
    },
    color: "#ff9500",
    fontSize: "35px",
    fontWeight: "bold",
    width: "100%",
    padding: "6px",
    border: "none",
    boxShadow: "0px 3px 10px 2px rgb(0,0,0,0.25)",
  },
});

const goToKitchen = () => {
  window.location = "/kitchen";
};

const goToBartender = () => {
  window.location = "/";
};

const Navigation = () => (
  <div className={css(styles.styleDiv)}>
    <button onClick={goToBartender} className={css(styles.nav)}>Novos Pedidos</button>
    <button onClick={goToKitchen} className={css(styles.nav)}>Pedidos Prontos</button>
  </div>
);

export default Navigation;
