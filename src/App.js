import React from "react";
import { StyleSheet, css } from "aphrodite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Bartender from "./pages/Bartender";
import Delivery from "./pages/Delivery";
import Kitchen from "./pages/Kitchen";
import { useAuth, userContext } from "./Auth";

const styles = StyleSheet.create({
  loading: {
    color: "white",
    fontSize: "18px",
  },
});

const App = () => {
  const { initializing, user } = useAuth();

  if (initializing) {
    return <div className={css(styles.loading)}>Carregando...</div>;
  }

  return (
    <userContext.Provider value={{ user }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/bartender" component={Bartender} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/kitchen" component={Kitchen} />
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default App;
