import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Threats from "./Threats";
import Home from "../components/Home";
import ThreatForm from "../components/ThreatForm";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class App extends Component {
  render() {
    return (
      <Router>
        <MDBNav>
          <MDBNavItem>
            <MDBNavLink disabled to='#!'>
              Nav
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink active to='/' component={Home}>
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/threats' component={Threats}>
              Index
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/threats/new' component={ThreatForm}>
              Create
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>

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
