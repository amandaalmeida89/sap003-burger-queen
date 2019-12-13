import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import firestore from "../firebase.js";
import MenuItem from "./MenuItem.js";

const styles = StyleSheet.create({
  styleFlexContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5%",
    marginTop: "5%",
  },
  styleDivParagraph: {
    marginBottom: "5%",
  },
  styleParagraph: {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    display: "inline",
    marginRight: "5%",
    marginLeft: "10%",
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
    <div className={css(styles.styleFlexContainer)}>
      <div className={css(styles.styleDivParagraph)}>
        <p className={css(styles.styleParagraph)}>Item</p>
        <p className={css(styles.styleParagraph)}>Preço</p>
      </div>
      {menu.map((item) => <MenuItem key={item.id} item={item} />)}
    </div>
  );
};

export default Menu;
