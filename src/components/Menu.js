import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import firestore from "../firebase.js";
import MenuItem from "./MenuItem.js";

const styles = StyleSheet.create({
  styleDiv: {
    width: "50vw",
  },
});

const useMenu = (category) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("menu")
      .where("category", "==", category)
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setItems(newItems);
      });
  });

  return items;
};

const Menu = (props) => {
  const category = props.category;
  const menu = useMenu(category);
  return (
    <div className={css(styles.styleDiv)}>
      {menu.map((item) => <MenuItem key={item.id} item={item} />)}
    </div>
  );
};

export default Menu;
