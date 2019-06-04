import React from "react";

import FormContainer from "../containers/FormContainer";
import MapContainer from "../containers/MapContainer";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Threats from "../containers/Threats";

export default class ThreatForm extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />
        <MDBContainer>
          <MDBRow>
            <MDBCol md='7'>
              <MapContainer />
            </MDBCol>
            <MDBCol md='5'>
              <Threats />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
