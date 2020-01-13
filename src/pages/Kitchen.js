import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import firestore, { app } from "../firebase.js";
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
    fontSize: "40px",
    backgroundColor: "#333333",
    color: "#ff9500",
    padding: "8px",

  },
  h1: {
    width: "90vw",
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid gray",
  },
  button: {
    width: "10vw",
    fontWeight: "bold",
    color: "#ff9500",
    fontSize: "50px",
    backgroundColor: "#333333",
    border: "none",
    boxShadow: "0px 3px 10px 2px rgb(0,0,0,0.25)",
  },
});

const Kitchen = () => {
  const [pending, setPendingItems] = useState([]);
  const [done, setDoneItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("orders")
      .orderBy("addedAt", "asc")
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) => {
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
      .orderBy("addedAt", "desc")
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
          title={<FontAwesomeIcon icon={faSignOutAlt} />}
          onClick={() => {
            app.auth().signOut();
          }}
        />
      </header>
      <main className={css(styles.menu)}>
        <Pending
          pedingState={pending}
          setOrderAsDone={setOrderAsDone}
        />
        <Prepared
          preparedState={done}
        />
      </main>
    </>
  );
};


export default Kitchen;
