import React from "react";

function Home() {
  return (
    <div>
      <h2>Honeypot Threatlist</h2>
      <p>
        These high-confidence IP addresses are gathered from attackers
        attempting to log into a private honeypot network hosted across the
        world. You can use this list of known attackers to hunt for comprised
        accounts on your own systems, to populate firewall lists, or for general
        security research purposes.
      </p>
    </div>
  );
}

export default Home;
