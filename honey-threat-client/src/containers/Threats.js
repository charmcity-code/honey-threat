import React, { Component } from "react";
import { connect } from "react-redux";

import ThreatCard from "../components/ThreatCard";
import ThreatForm from "./ThreatForm";
import { getThreats, destroyThreat } from "../actions/threatActions";
import MapContainer from "./MapContainer";
import CardColumns from "react-bootstrap/CardColumns";

class Threats extends Component {
  componentDidMount() {
    this.props.getThreats();
  }

  render() {
    return (
      <div>
        <h3>Honeypot Threatlist</h3>
        <CardColumns>
          {this.props.threats.map(threat => (
            <ThreatCard
              key={threat.id}
              threat={threat}
              destroyThreat={this.props.destroyThreat}
            />
          ))}
        </CardColumns>
        <MapContainer />
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

const mapDispatchToProps = dispatch => {
  return {
    getThreats: () => {
      dispatch(getThreats());
    },
    destroyThreat: id => dispatch(destroyThreat(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Threats);
