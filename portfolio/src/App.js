import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
//import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
  
        <Nav />
    
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
