import React from "react";
import { StyleSheet, css } from "aphrodite";
import MenuItem from "./MenuItem.js";

const styles = StyleSheet.create({
  divMenu: {
    width: "45vw",
    padding: "8px",
  },
});


const Menu = (props) => {
  const menuState = props.menuState;
  return (
    <div className={css(styles.divMenu)}>
      {menuState.map((item) => (
        <MenuItem
          onClick={(e) => {
            props.onItemAdd(item);
            e.preventDefault();
          }}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Menu;
