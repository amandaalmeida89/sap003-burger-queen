/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import Navigation from "../components/Navigation.js";
import firestore from "../firebase.js";
import Pending from "../components/Pending.js";
import Ready from "../components/Ready";

const styles = StyleSheet.create({
  styleDivMenu: {
    display: "flex",
  },
});


const Kitchen = () => {
  const [items, setItems] = useState([]);
  const [done, setDoneItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("orders")
      .where("status", "==", "pendente")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setItems(newItems);
      });
  }, []);

  useEffect(() => {
    firestore
      .collection("orders")
      .where("status", "==", "done")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setDoneItems(newItems);
      });
  }, []);

  const setOrderAsDone = (order) => {
    firestore
      .collection("orders")
      .doc(order.id)
      .update({
        status: "done",
        time: new Date().toLocaleString("pt-BR"),
      });
  };

  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <section className={css(styles.styleDivMenu)}>
        <Pending
          pedingState={items}
          setOrderAsDone={setOrderAsDone}
        />
        <Ready
          readyState={done}
        />
      </section>
    </div>
  );
};


export default Kitchen;
