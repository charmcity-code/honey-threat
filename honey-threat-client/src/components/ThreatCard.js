import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class ThreatCard extends Component {
  handleClick = () => {
    this.props.destroyThreat(this.props.threat.id);
  };

  render() {
    const { threat } = this.props;
    return (
      <tbody>
        <tr>
          <td>{threat.ip}</td>
          <td>{threat.address}</td>
          <td style={{ color: threat.count >= 667 ? "red" : "orange" }}>
            {threat.count}
          </td>
          <td>
            <Button
              onClick={this.handleClick}
              variant='outline-danger'
              size='sm'
            >
              X
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default ThreatCard;
