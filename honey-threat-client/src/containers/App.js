import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Threats from "./Threats";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import ThreatForm from "../components/ThreatForm";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route exact path='/threats' component={Threats} />
          <Route exact path='/threats/new' component={ThreatForm} />
        </div>
      </Router>
    );
  }
}

export default App;
