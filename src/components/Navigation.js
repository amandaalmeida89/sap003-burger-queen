import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { app } from "../firebase.js";
import Button from "./Button.js";


const styles = StyleSheet.create({
  divNav: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  nav: {
    textDecoration: "none",
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
  button: {
    fontSize: "50px",
    color: "#ff9500",
    backgroundColor: "#333333",
    border: "none",
    boxShadow: "0px 3px 10px 2px rgb(0,0,0,0.25)",
    padding: "8px",
  },
});

const Navigation = () => (
  <div className={css(styles.divNav)}>
    <Link to="/bartender" className={css(styles.nav)}>Novos Pedidos</Link>
    <Link to="/delivery" className={css(styles.nav)}>Pedidos Prontos</Link>
    <Button
      className={css(styles.button)}
      title={<FontAwesomeIcon icon={faSignOutAlt} />}
      onClick={() => {
        app.auth().signOut();
      }}
    />
  </div>
);

export default Navigation;
