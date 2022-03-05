import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function CurrentStatus() {
  return (
    <>
      <div id="status" className="custom-features current-status">
        <Container>
        
         <Row>
            <Col md={8}>
              <h2 className="title">Current Status</h2>
              <p>
                So far, we have:
              </p>
              <ul>
                <li>A vision of what we're building</li>
                <li>A community that wants this</li>
                <li>A small budget to put towards making this happen</li>
                <li>Some personas and an analysis of their pain points</li>
                <li>A set of wireframes</li>
                <li>An incomplete set of higher fidelity mockups</li>
                <li>An archictecture with a roadmap towards an exciting much more decentralized version</li>
                <li>The start of a flutter mobile app</li>
                <li>The start of a group of people who want to build it</li>
              </ul>
            
              <p>
                We're working on:
              </p>
              <ul>
                <li>Completing the mobile app</li>
                <li>Recruiting, especially for designers who might be able to help.</li>
                <li>Figuring out the lower level  protocol details, white paper and simulations.</li>
                <li>Finding a bigger founding team.</li>
                <li>Geting the word out (what this is)</li>
              </ul>

              <p>
                We'd like your help! 
              </p>
              <ul>
                <li>As an open source project we're always open to contributions but we're very much looking to carefully expand our team with the right contributors right now.</li>
              </ul>

      
      
            </Col>
            <Col md={4} className="pt-5">
              <img
                alt="working"
                src={require("assets/img/working.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CurrentStatus;