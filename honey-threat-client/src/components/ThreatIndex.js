import React from "react";
import MapContainer from "../containers/MapContainer";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Threats from "../containers/Threats";

export default class ThreatIndex extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <h6 className='header'>Current Threats</h6>
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
