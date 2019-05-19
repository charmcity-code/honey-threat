import React, { Component } from "react";
import { connect } from "react-redux";

import ThreatCard from "../components/ThreatCard";
import ThreatForm from "./ThreatForm";
import { getThreats } from "../actions/threatActions";

class Threats extends Component {
  componentDidMount() {
    this.props.getThreats();
  }

  render() {
    return (
      <div>
        <h3>Threats Component</h3>
        {this.props.threats.map(threat => (
          <ThreatCard key={threat.id} threat={threat} />
        ))}
        <ThreatForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    threats: state.threats
  };
};

export default connect(
  mapStateToProps,
  { getThreats }
)(Threats);
