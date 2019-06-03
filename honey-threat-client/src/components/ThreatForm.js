import React from "react";

import FormContainer from "../containers/FormContainer";
import MapContainer from "../containers/MapContainer";
import Threats from "../containers/Threats";

export default class ThreatForm extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />
        <div className='rowC'>
          <MapContainer />
          <Threats />
        </div>
      </div>
    );
  }
}
