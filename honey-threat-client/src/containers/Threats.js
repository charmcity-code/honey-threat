import React from "react";

const Threats = props => (
  <div>
    <h3>Threats Component</h3>
    {props.threats.map(threat => (
      <p key={threat.id}>
        IP address: {threat.ip} Count: {threat.count} {threat.country}
      </p>
    ))}
  </div>
);
export default Threats;
