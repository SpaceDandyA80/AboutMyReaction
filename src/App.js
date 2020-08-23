import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
 import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
  
        <Nav />
    
      <Switch>
        <Route to="/" exact path="/" component={About} />
        <Route to="/about" exact path="/about" component={About} />
        <Route to="portfolio" exact path="/portfolio" component={Portfolio} />
        <Route to="/contact" exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
