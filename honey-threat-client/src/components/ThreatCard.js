// import Card from "react-bootstrap/Card";
// import Table from "react-bootstrap/Table";
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

      // <Card border='dark' bg='light' style={{ width: "23rem" }}>
      //   <Card.Header>{threat.address}</Card.Header>
      //   <Card.Body>
      //     <Card.Title>{threat.ip}</Card.Title>
      // <Card.Text style={{ color: threat.count >= 667 ? "red" : "orange" }}>
      //       Count: {threat.count}
      //     </Card.Text>
      //     <Card.Text>
      //       <button onClick={this.handleClick}> Delete </button>
      //     </Card.Text>
      //   </Card.Body>
      // </Card>
    );
  }
}
export default ThreatCard;
