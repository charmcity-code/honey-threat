import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer className='mt-5 text-center'>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ background: "#e0e0e0" }}>
            <h2 className='h1 display-3'>Community IP Threatlist</h2>
            <p className='lead'>
              These high-confidence IP addresses are gathered from attackers
              attempting to log into a private honeypot network hosted across
              the world. You can use this list of known attackers to hunt for
              comprised accounts on your own systems, to populate firewall
              lists, or for general security research purposes.
            </p>
            <hr className='my-2' />
            <p style={{ color: "#3f729b" }}>
              &copy;2019{" "}
              <a
                style={{ color: "#3f729b" }}
                href='https://github.com/lulabromark'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://github.com/lulabromark
              </a>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
