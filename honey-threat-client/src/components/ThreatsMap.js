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
      <GoogleMap defaultZoom={4} center={{ lat: 39.8283, lng: -98.5795 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default ThreatsMap;
