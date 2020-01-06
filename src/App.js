import React, { useEffect } from "react";
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from "react-router-dom";
import growl from "growl-alert";
import firestore, { auth } from "./firebase.js";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Bartender from "./pages/Bartender";
import Delivery from "./pages/Delivery";
import Kitchen from "./pages/Kitchen";

const option = {
  fadeAway: true,
  fadeAwayTimeout: 2000,
};

const App = () => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        firestore.collection("users").doc(user.uid)
          .get().then((snap) => {
            const profileData = snap.data();
            console.log(profileData);
            if (profileData.service === "bartender") {
              growl.success({ text: "Bem vindo!", ...option });
              history.push("/bartender");
            } else {
              growl.success({ text: "Bem vindo!", ...option });
              history.push("/kitchen");
            }
          });
      } else {
        history.push("/");
      }
    });
  }, [history]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/bartender" component={Bartender} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/kitchen" component={Kitchen} />
      </Switch>
    </Router>
  );
};

export default App;
