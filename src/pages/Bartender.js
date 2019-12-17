import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import growl from "growl-alert";
import "growl-alert/dist/growl-alert.css";
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
    borderRadius: "6px",
  },
  styleInputName: {
    width: "30%",
    fontSize: "18px",
    marginTop: "5%",
    textAlign: "center",
    borderRadius: "6px",
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
  const [tableState, setTable] = useState("");
  const [nameState, setName] = useState("");

  const addItemToOrder = (item) => {
    if (!orderState.includes(item)) {
      item.count = 1;
      setOrder([...orderState, item]);
    } else {
      item.count += 1;
      setOrder([...orderState]);
    }
  };

  const total = orderState.reduce((acc, currValue) => acc + (currValue.price * currValue.count), 0);

  const remove = (item) => {
    const index = (orderState.indexOf(item));
    orderState.splice(index, 1);
    setOrder([...orderState]);
  };

  const removeAmountOrder = (item) => {
    if (item.count === 1) {
      remove(item);
    } else {
      item.count -= 1;
      setOrder([...orderState]);
    }
  };

  const createOrder = () => {
    if (tableState && nameState) {
      firestore
        .collection("orders")
        .add({
          tableNumber: tableState,
          name: nameState,
          items: orderState,
        })
        .then(() => {
          setTable([""]);
          setName([""]);
          setOrder([]);
        });
    } else {
      growl.warning("Preencha o número da mesa e nome do cliente");
    }
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
          <Input className={css(styles.styleInputTable)} value={tableState} id="table" placeholder="Nº Mesa" type="number" onChange={(e) => setTable(e.currentTarget.value)} />
          <Input className={css(styles.styleInputName)} value={nameState} id="name" placeholder="Nome" type="text" onChange={(e) => setName(e.currentTarget.value)} />
        </div>
        <div className={css(styles.styleDivMenu)}>
          <Menu
            menuState={menuState}
            onItemAdd={addItemToOrder}
          />
          <Order
            orderState={orderState}
            remove={remove}
            total={total}
            removeAmountOrder={removeAmountOrder}
            onItemAdd={addItemToOrder}
            createOrder={createOrder}
          />
        </div>
      </form>
    </div>
  );
};

export default Bartender;
