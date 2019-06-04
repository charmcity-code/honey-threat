import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Threats from "./Threats";
import Home from "../components/Home";
import ThreatForm from "../components/ThreatForm";
import ThreatIndex from "../components/ThreatIndex";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <MDBNav>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "#0d47a1", "font-weight": "bold" }}
                active
                to='/'
                component={Home}
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "#0d47a1", "font-weight": "bold" }}
                to='/threats'
                component={Threats}
              >
                Current Threats
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "#0d47a1", "font-weight": "bold" }}
                to='/threats/new'
                component={ThreatForm}
              >
                Create New Threat
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <div className='App'>
            <Route exact path='/' component={Home} />
            <Route exact path='/threats' component={ThreatIndex} />
            <Route exact path='/threats/new' component={ThreatForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
