import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

const styles = StyleSheet.create({
  styleDiv: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
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
    padding: "10px",
    boxShadow: "0px 3px 10px 2px rgb(0,0,0,0.25)",
  },
});

const Navigation = () => (
  <div className={css(styles.styleDiv)}>
    <Link to="/" className={css(styles.nav)}>Novos Pedidos</Link>
    <Link to="Kitchen" className={css(styles.nav)}>Pedidos Prontos</Link>
  </div>
);

export default Navigation;
