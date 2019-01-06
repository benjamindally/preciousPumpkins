import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Menu from "./components/menu/Menu";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
