import React, { Component } from "react";
import { connect } from "react-redux";

import ThreatCard from "../components/ThreatCard";
import { getThreats, destroyThreat } from "../actions/threatActions";
import Table from "react-bootstrap/Table";
import "./App.css";

class Threats extends Component {
  componentDidMount() {
    this.props.getThreats();
  }

  render() {
    return (
      <div>
        <Table style={{ width: 550 }} striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>IP</th>
              <th>Location</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          {this.props.threats.map(threat => (
            <ThreatCard
              key={threat.id}
              threat={threat}
              destroyThreat={this.props.destroyThreat}
            />
          ))}
        </Table>
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
