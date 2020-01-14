import React from "react";
import { StyleSheet, css } from "aphrodite";
import MenuItem from "./MenuItem.js";

const styles = StyleSheet.create({
  divMenu: {
    width: "50vw",
    padding: "8px",
    marginLeft: "1%",
  },
  section: {
    textAlign: "center",
    color: "#ff9500",
    marginTop: "10%",
  },
  h1: {
    fontWeight: "bold",
    marginBottom: "10%",
    marginTop: "13%",
    fontSize: "28px",
  },
});


const Menu = (props) => {
  const menuState = props.menuState;

  const renderMenuItem = (item) => (
    <MenuItem
      onClick={(e) => {
        props.onItemAdd(item);
        e.preventDefault();
      }}
      key={item.id}
      item={item}
      onItemAdd={props.onItemAdd}
    />
  );

  const hamburguers = menuState.filter((elem) => elem.subcategory === "hamburguer");
  const beverages = menuState.filter((elem) => elem.subcategory === "bebidas")
    .sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

  const sideDish = menuState.filter((elem) => elem.subcategory === "acompanhamentos");

  return (
    <div className={css(styles.divMenu)}>
      <section className={css(styles.section)}>
        {hamburguers.length > 0 && <h1 className={css(styles.h1)}>Hambúrguers</h1>}
        {hamburguers.map(renderMenuItem)}
        {beverages.length > 0 && <h1 className={css(styles.h1)}>Bebidas</h1>}
        {beverages.map(renderMenuItem)}
        {sideDish.length > 0 && <h1 className={css(styles.h1)}>Acompanhamentos</h1>}
        {sideDish.map(renderMenuItem)}
        {menuState.filter((elem) => elem.subcategory === undefined).map(renderMenuItem)}
      </section>
    </div>
  );
};

export default Menu;
