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
  Menu: {
    display: "flex",
    justifyContent: "space-around",
  },
  InputTable: {
    width: "10%",
    fontSize: "18px",
    marginTop: "5%",
    textAlign: "center",
    borderRadius: "6px",
  },
  InputName: {
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
  DivMenu: {
    display: "flex",
  },
});

const option = {
  fadeAway: true,
  fadeAwayTimeout: 2000,
};

const Bartender = () => {
  const [category, setCategory] = useState("breakfast");
  const [orderState, setOrder] = useState([]);
  const [tableState, setTable] = useState("");
  const [nameState, setName] = useState("");
  const [breakfastState, setBreakfast] = useState([]);
  const [lunchState, setLunch] = useState([]);

  useEffect(() => {
    firestore
      .collection("menu")
      .get()
      .then((snap) => {
        const newItems = snap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setBreakfast(newItems.filter((elem) => elem.category === "breakfast"));
        setLunch(newItems.filter((elem) => elem.category === "lunch"));
      });
  }, []);

  const categoryItens = category === "lunch" ? lunchState : breakfastState;

  const addItemToOrder = (item, extra) => {
    const id = item.id + (extra || "");
    const itemIndex = orderState.findIndex((el) => el.id === id);
    if (itemIndex === -1) {
      if (extra) {
        setOrder([...orderState, {
          ...item, price: (item.price + 1), count: 1, extra, id, name: `${item.name} com ${extra}`,
        }]);
      } else {
        setOrder([...orderState, { ...item, count: 1 }]);
      }
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
    const itemIndex = orderState.findIndex((el) => el.id === item.id && el.extra === item.extra);
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
          status: "pending",
          addedAt: new Date().getTime(),
        })
        .then(() => {
          growl.success({ text: "Pedido enviado à cozinha", ...option });
        });
      setTable([""]);
      setName([""]);
      setOrder([]);
    } else {
      growl.warning({ text: "Preencha o número da mesa e nome do cliente", ...option });
    }
  };

  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <form>
          <div className={css(styles.Menu)}>
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
            <Input className={css(styles.InputTable)} value={tableState} id="table" placeholder="Nº Mesa" type="number" onChange={(e) => setTable(e.currentTarget.value)} />
            <Input className={css(styles.InputName)} value={nameState} id="name" placeholder="Nome" type="text" onChange={(e) => setName(e.currentTarget.value)} />
          </div>
          <div className={css(styles.DivMenu)}>
            <Menu
              menuState={categoryItens}
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
      </main>
    </>
  );
};

export default Bartender;
