import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation.js";
import firestore from "../firebase.js";
import Pending from "../components/Pending.js";


const useOrder = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    firestore
      .collection("orders")
      .orderBy("addedAt", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setItems(newItems);
      });
  }, []);
  return items;
};

const Kitchen = () => {
  const pedingState = useOrder();

  return (
    <div>
      <Navigation />
      <Pending
        pedingState={pedingState}
      />
    </div>
  );
};


export default Kitchen;
