import React, { Component } from "react";
import { MDBTableBody } from "mdbreact";
import { MDBBtn } from "mdbreact";

class ThreatCard extends Component {
  handleClick = () => {
    this.props.destroyThreat(this.props.threat.id);
  };

  render() {
    const { threat } = this.props;
    return (
      <MDBTableBody>
        <tr>
          <td style={{ color: "#fafafa" }}>{threat.ip}</td>
          <td style={{ color: "#fafafa" }}>{threat.address}</td>
          <td style={{ color: threat.count >= 667 ? "#ff8a65" : "#ffeb3b" }}>
            {threat.count}
          </td>
          <td>
            <MDBBtn color='danger' size='sm' onClick={this.handleClick}>
              X
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    );
  }
}
export default ThreatCard;
