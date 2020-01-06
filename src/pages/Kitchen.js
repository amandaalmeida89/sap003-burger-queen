import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import firestore, { app } from "../firebase.js";
import Pending from "../components/Pending.js";
import Prepared from "../components/ Prepared";
import { useAuth } from "../Auth.js";


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
  button: {
    width: "50vw",
    fontWeight: "bold",
    fontSize: "35px",
    color: "#ff9500",
  },
});

const Kitchen = () => {
  const [pending, setPendingItems] = useState([]);
  const [done, setDoneItems] = useState([]);
  const history = useHistory();
  const { user } = useAuth();

  if (!user) {
    history.push("/");
  }

  useEffect(() => {
    firestore
      .collection("orders")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setPendingItems(newItems.filter((elem) => elem.status === "pending"));
      });
  }, []);

  useEffect(() => {
    firestore
      .collection("orders")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setDoneItems(newItems.filter((elem) => elem.status === "done"));
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
        <Button
          className={css(styles.button)}
          title="Sair"
          onClick={() => {
            app.auth().signOut();
          }}
        />
      </header>
      <section className={css(styles.menu)}>
        <Pending
          pedingState={pending}
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
