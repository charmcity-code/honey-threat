import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class ThreatCard extends Component {
  handleClick = () => {
    this.props.destroyThreat(this.props.threat.id);
  };

  render() {
    const { threat } = this.props;
    return (
      <Card border='dark' bg='light' style={{ width: "23rem" }}>
        <Card.Header>{threat.address}</Card.Header>
        <Card.Body>
          <Card.Title>{threat.ip}</Card.Title>
          <Card.Text style={{ color: threat.count >= 667 ? "red" : "orange" }}>
            Count: {threat.count}
          </Card.Text>
          <Card.Text>
            <button onClick={this.handleClick}> Delete </button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default ThreatCard;
