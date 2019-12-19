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

const Bartender = () => {
  const [category, setCategory] = useState("breakfast");
  const [orderState, setOrder] = useState([]);
  const [tableState, setTable] = useState("");
  const [nameState, setName] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("menu")
      .where("category", "==", category)
      .get()
      .then((snap) => {
        const newItems = snap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setItems(newItems);
      });
  }, [category]);

  const addItemToOrder = (item) => {
    const itemIndex = orderState.findIndex((el) => el.id === item.id);
    if (itemIndex === -1) {
      setOrder([...orderState, { ...item, count: 1 }]);
    } else {
      const newOrder = [...orderState];
      newOrder[itemIndex].count += 1;
      setOrder(newOrder);
    }
  };

  const total = orderState.reduce((acc, currValue) => acc + (currValue.price * currValue.count), 0);

  const remove = (item) => {
    const index = (orderState.indexOf(item));
    orderState.splice(index, 1);
    setOrder([...orderState]);
  };

  const removeAmountOrder = (item) => {
    const itemIndex = orderState.findIndex((el) => el.id === item.id);
    const itemCount = orderState[itemIndex];
    if (itemCount.count === 1) {
      remove(itemCount);
    } else {
      itemCount.count += -1;
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
          status: "pendente",
          addedAt: new Date().getTime(),
        })
        .then(() => {
          growl.success("Pedido enviado à cozinha");
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
      <nav>
        <Navigation />
      </nav>
      <section>
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
              menuState={items}
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
      </section>
    </div>
  );
};

export default Bartender;
