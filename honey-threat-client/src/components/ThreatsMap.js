import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ThreatMarker from "./ThreatMarker";

const ThreatsMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.threats.map(threat => (
      <ThreatMarker
        key={threat.id}
        location={{ lat: parseFloat(threat.lat), lng: parseFloat(threat.long) }}
      />
    ));
    return (
      <GoogleMap defaultZoom={2} center={{ lat: 25.7617, lng: -80.1918 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default ThreatsMap;
