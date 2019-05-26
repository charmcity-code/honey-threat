import React from "react";

const ThreatCard = ({ threat }) => (
  <tbody>
    <tr>
      <td>{threat.ip}</td>
      <td>{threat.count}</td>
      <td>{threat.country}</td>
    </tr>
  </tbody>
);

export default ThreatCard;
