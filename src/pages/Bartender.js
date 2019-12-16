import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import firestore from "../firebase.js";
import Navigation from "../components/Navigation.js";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Menu from "../components/Menu.js";
import Order from "../components/Order.js";

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
  buttons: {
    backgroundColor: "#ff9500",
    ":hover": {
      backgroundColor: "#444444",
      color: "#c7c7cc",
    },
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "6px",
    borderRadius: "6px",
    textAlign: "center",
    marginTop: "5%",
    outline: "none",
  },
  styleDivMenu: {
    display: "flex",
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
  }, [category]);
  return items;
};

const Bartender = () => {
  const [category, setCategory] = useState("breakfast");
  const menuState = useMenu(category);
  const [orderState, setOrder] = useState([]);

  const addItemToOrder = (item) => {
    setOrder((orderOld) => orderOld.concat([item]));
  };

  const remove = (e) => {
    const id = e.currentTarget.id;
    setOrder((orderOld) => orderOld.filter((el) => el.id !== id));
    e.preventDefault();
  };

  return (
    <div>
      <Navigation />
      <form>
        <div className={css(styles.styleMenu)}>
          <Button
            className={css(styles.buttons)}
            onClick={(e) => {
              setCategory("breakfast");
              e.preventDefault();
            }}
            id="button-one"
            title="Café da manhã"
          />
          <Button
            className={css(styles.buttons)}
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
        <div className={css(styles.styleDivMenu)}>
          <Menu
            menuState={menuState}
            onItemAdd={addItemToOrder}
          />
          <Order
            orderState={orderState}
            remove={remove}
          />
        </div>
      </form>
    </div>
  );
};

export default Bartender;
