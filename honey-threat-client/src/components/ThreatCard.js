import Card from "react-bootstrap/Card";
import React from "react";

const ThreatCard = ({ threat }) => (
  // <tbody>
  //   <tr>
  //     <td>{threat.ip}</td>
  //     <td>{threat.count}</td>
  //     <td>{threat.country}</td>
  //   </tr>
  // </tbody>

  <Card border='dark' bg='light' style={{ width: "25rem" }}>
    <Card.Header>{threat.country}</Card.Header>
    <Card.Body>
      <Card.Title>{threat.ip}</Card.Title>
      <Card.Text>Count: {threat.count}</Card.Text>
    </Card.Body>
  </Card>
);

export default ThreatCard;
