import React from "react";
import { StyleSheet, css } from "aphrodite";
import MenuItem from "./MenuItem.js";

const styles = StyleSheet.create({
  styleDiv: {
    width: "50vw",
  },
});


const Menu = (props) => {
  const menuState = props.menuState;
  return (
    <div className={css(styles.styleDiv)}>
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
