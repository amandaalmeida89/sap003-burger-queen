import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import Navigation from "../components/Navigation.js";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Menu from "../components/Menu.js";

const styles = StyleSheet.create({
  styleMenu: {
    display: "flex",
    justifyContent: "space-around",
  },
  styleInputTable: {
    width: "10%",
    fontSize: "18px",
    marginTop: "5%",
    textAlign: "center",
  },
  styleInputName: {
    width: "30%",
    fontSize: "18px",
    marginTop: "5%",
    textAlign: "center",
  },
});

const Bartender = () => {
  const [category, setCategory] = useState("breakfast");

  return (
    <div>
      <Navigation />
      <form>
        <div className={css(styles.styleMenu)}>
          <Button
            onClick={(e) => {
              setCategory("breakfast");
              e.preventDefault();
            }}
            id="button-one"
            title="Café da manhã"
          />
          <Button
            onClick={(e) => {
              setCategory("lunch");
              e.preventDefault();
            }}
            id="button-two"
            title="Almoço e Jantar"
          />
          <Input className={css(styles.styleInputTable)} id="table" placeholder="Nº Mesa" type="number" />
          <Input className={css(styles.styleInputName)} id="name" placeholder="Nome" type="text" />
        </div>
        <Menu category={category} />
      </form>
    </div>
  );
};

export default Bartender;
