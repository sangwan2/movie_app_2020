import React from "react";
import { HashRouter, Route, Router } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./component/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
