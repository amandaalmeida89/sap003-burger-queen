import React, { useEffect } from "react";
import {
  BrowserRouter as Switch, Route, useHistory,
} from "react-router-dom";
import firestore, { auth } from "./firebase.js";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Bartender from "./pages/Bartender";
import Delivery from "./pages/Delivery";
import Kitchen from "./pages/Kitchen";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.collection("users").doc(user.uid)
          .get().then((snap) => {
            const profileData = snap.data();
            console.log(profileData);
            if (profileData.service === "bartender") {
              history.push("/bartender");
            } else {
              history.push("/kitchen");
            }
          });
      } else {
        history.push("/");
      }
    });
  }, [history]);

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/bartender" component={Bartender} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/kitchen" component={Kitchen} />
    </Switch>
  );
};

export default App;
