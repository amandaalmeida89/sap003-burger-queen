import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import firestore from "../firebase.js";
import Pending from "../components/Pending.js";
import Prepared from "../components/ Prepared";

const styles = StyleSheet.create({
  menu: {
    display: "flex",
  },
  hearder: {
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 3px 10px 2px rgb(0,0,0,0.25)",
    fontWeight: "bold",
    fontSize: "35px",
    backgroundColor: "#333333",
    color: "#ff9500",
  },
  h1: {
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid gray",
  },
  link: {
    width: "50vw",
  },
});


const Kitchen = () => {
  const [items, setItems] = useState([]);
  const [done, setDoneItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("orders")
      .where("status", "==", "pending")
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
        delivery: "pending",
        status: "done",
        time: new Date().getTime(),
      });
  };

  return (
    <>
      <header className={css(styles.hearder)}>
        <div className={css(styles.h1)}>Cozinha</div>
        <Link className={css(styles.hearder, styles.link)} to="/">Sair</Link>
      </header>
      <section className={css(styles.menu)}>
        <Pending
          pedingState={items}
          setOrderAsDone={setOrderAsDone}
        />
        <Prepared
          preparedState={done}
        />
      </section>
    </>
  );
};


export default Kitchen;
