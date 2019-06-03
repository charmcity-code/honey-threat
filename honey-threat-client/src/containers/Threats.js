import React, { Component } from "react";
import { connect } from "react-redux";

import ThreatCard from "../components/ThreatCard";
import { getThreats, destroyThreat } from "../actions/threatActions";
import { MDBTable, MDBTableHead } from "mdbreact";
import "./App.css";

class Threats extends Component {
  componentDidMount() {
    this.props.getThreats();
  }

  render() {
    return (
      <div>
        <MDBTable style={{ width: 550 }} bordered small responsive>
          <MDBTableHead>
            <tr>
              <th>IP</th>
              <th>Location</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
          </MDBTableHead>
          {this.props.threats.map(threat => (
            <ThreatCard
              key={threat.id}
              threat={threat}
              destroyThreat={this.props.destroyThreat}
            />
          ))}
        </MDBTable>
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
