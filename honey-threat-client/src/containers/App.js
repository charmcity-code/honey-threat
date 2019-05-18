import React, { Component } from "react";
import "./App.css";
import Threats from "./Threats";

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threats: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/threats`)
      .then(response => response.json())
      .then(threats => this.setState({ threats }));
  }

  render() {
    return (
      <div className='App'>
        <Threats threats={this.state.threats} />
      </div>
    );
  }
}

export default App;
