import React, { useState, useEffect } from "react";
import firestore from "../firebase.js";
import Navigation from "../components/Navigation.js";
import Ready from "../components/Ready";


const Delivery = () => {
  const [delivery, setDelivery] = useState([]);

  useEffect(() => {
    firestore
      .collection("orders")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newDelivery = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setDelivery(newDelivery.filter((elem) => elem.delivery === "pending"));
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
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Ready
          deliveryState={delivery}
          setDeliveryAsDone={setDeliveryAsDone}
        />
      </main>
    </>
  );
};

export default Delivery;
