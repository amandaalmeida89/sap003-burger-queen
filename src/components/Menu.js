import React from "react";
import { StyleSheet, css } from "aphrodite";
import MenuItem from "./MenuItem.js";

const styles = StyleSheet.create({
  styleDiv: {
    width: "50vw",
  },
});


const Menu = (props) => {
  const menu = props.menu;
  return (
    <div className={css(styles.styleDiv)}>
      {menu.map((item) => <MenuItem key={item.id} item={item} />)}
    </div>
  );
};

export default Menu;
