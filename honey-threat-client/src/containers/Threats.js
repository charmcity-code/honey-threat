import React, { Component } from "react";
import { connect } from "react-redux";

import ThreatCard from "../components/ThreatCard";
import ThreatForm from "./ThreatForm";
import { getThreats } from "../actions/threatActions";
import MapContainer from "./MapContainer";
import Table from "react-bootstrap/Table";

class Threats extends Component {
  componentDidMount() {
    this.props.getThreats();
  }

  render() {
    return (
      <div>
        <h3>Threats Component</h3>
        <Table size='sm' responsive='sm' variant='dark'>
          <thead>
            <tr>
              <th>IP Address</th>
              <th>Count</th>
              <th>Country</th>
            </tr>
          </thead>

          {this.props.threats.map(threat => (
            // <Col>
            <ThreatCard key={threat.id} threat={threat} />
            // </Col>
          ))}
        </Table>

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

export default connect(
  mapStateToProps,
  { getThreats }
)(Threats);
