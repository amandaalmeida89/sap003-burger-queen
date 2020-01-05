import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import firestore from "../firebase.js";
import Navigation from "../components/Navigation.js";
import Ready from "../components/Ready";
import Delivered from "../components/Delivered";

const styles = StyleSheet.create({
  styleDivMenu: {
    display: "flex",
  },
});

const Delivery = () => {
  const [delivery, setDelivery] = useState([]);
  const [delivered, setDeliveredItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("orders")
      .where("delivery", "==", "pending")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newDelivery = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setDelivery(newDelivery);
      });
  }, [delivery]);

  useEffect(() => {
    firestore
      .collection("orders")
      .where("delivery", "==", "done")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newDelivered = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setDeliveredItems(newDelivered);
      });
  }, []);

  const setDeliveryAsDone = (order) => {
    firestore
      .collection("orders")
      .doc(order.id)
      .update({
        delivery: "done",
        timeDelivery: new Date(),
      });
  };

  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <section className={css(styles.styleDivMenu)}>
        <Ready
          deliveryState={delivery}
          setDeliveryAsDone={setDeliveryAsDone}
        />
        <Delivered
          deliveredState={delivered}
        />
      </section>
    </div>
  );
};

export default Delivery;
