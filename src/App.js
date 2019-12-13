import React from "react";
import Bartender from "./pages/Bartender";
import Kitchen from "./pages/Kitchen";


const App = () => {
  if (window.location.pathname === "/kitchen") {
    return (
      <Kitchen />
    );
  }
  return (
    <Bartender />
  );
};

export default App;
