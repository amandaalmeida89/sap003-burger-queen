import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Bartender from "./pages/Bartender";
import Delivery from "./pages/Delivery";
import Kitchen from "./pages/Kitchen";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/bartender" component={Bartender} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/kitchen" component={Kitchen} />
    </Switch>
  </Router>
);

export default App;
