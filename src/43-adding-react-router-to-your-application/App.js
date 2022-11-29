import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./temperatures.scss";

export const App = () => (
  <Router>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </main>
  </Router>
);

export default App;
