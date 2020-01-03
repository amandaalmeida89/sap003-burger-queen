import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bartender from "./pages/Bartender";
import Kitchen from "./pages/Kitchen";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Bartender} />
      <Route path="/kitchen" component={Kitchen} />
    </Switch>
  </Router>
);

export default App;
