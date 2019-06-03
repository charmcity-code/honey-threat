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
          <td>{threat.ip}</td>
          <td>{threat.address}</td>
          <td style={{ color: threat.count >= 667 ? "red" : "orange" }}>
            {threat.count}
          </td>
          <td>
            <MDBBtn outline color='danger' size='sm' onClick={this.handleClick}>
              X
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    );
  }
}
export default ThreatCard;
