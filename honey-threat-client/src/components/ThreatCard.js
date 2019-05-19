import React from "react";

const ThreatCard = ({ threat }) => (
  <div>
    <p key={threat.id}>
      IP address: {threat.ip} Count: {threat.count} {threat.country}
    </p>
  </div>
);

export default ThreatCard;
