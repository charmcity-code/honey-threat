import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ThreatMarker from "./ThreatMarker";

const ThreatsMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.threats.map(threat => (
      <ThreatMarker
        key={threat.id}
        location={{ lat: parseFloat(threat.lat), lng: parseFloat(threat.long) }}
        ip={threat.ip}
      />
    ));
    return (
      <GoogleMap defaultZoom={4} center={{ lat: 40.6766, lng: -95.8594 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default ThreatsMap;
