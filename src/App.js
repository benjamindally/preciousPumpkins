import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Spaces from "./components/spaces/Spaces";
import Contact from "./components/contact/Contact";
import Activities from "./components/activities/Activities";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/spaces" component={Spaces} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
