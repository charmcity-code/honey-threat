import React from "react";
import { getThreats } from "../actions/threatActions";
import { connect } from "react-redux";
import ThreatsMap from "../components/ThreatsMap";

class MapContainer extends React.Component {
  googleAPI = process.env.REACT_APP_GOOGLE_KEY;
  startURL = "https://maps.googleapis.com/maps/api/js?key=";
  endURL = "&v=3.exp&libraries=geometry,drawing,places";
  render() {
    console.log("props", this.props.threats);
    return (
      <ThreatsMap
        threats={this.props.threats}
        googleMapURL={`startURL + googleAPI + endURL`}
        loadingElement={<div style={{ height: `90%` }} />}
        containerElement={<div style={{ height: `450px`, width: `950px` }} />}
        mapElement={<div style={{ height: `90%` }} />}
      />
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
)(MapContainer);
