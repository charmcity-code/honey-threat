import React from "react";
import { Marker } from "react-google-maps";

export default class ThreatMarker extends React.Component {
  render() {
    return <Marker position={this.props.location} title={this.props.ip} />;
  }
}
