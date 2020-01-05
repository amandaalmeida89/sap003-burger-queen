import {
  useContext, useEffect, createContext, useState,
} from "react";
import { app } from "./firebase.js";

export const userContext = createContext({
  user: false,
});

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export const useAuth = () => {
  const [state, setState] = useState(() => ({ initializing: true, user: app.auth().currentUser }));

  function onChange(user) {
    if (user) {
      app
        .firestore()
        .collection("users")
        .doc(user.uid).get()
        .then((profile) => {
          const profileData = profile.data();
          setState({ initializing: false, user: { ...user, profileData } });
        });
    } else {
      setState({ initializing: false, user: false });
    }
  }

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};
