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
                <li>Some <a href={require("assets/img/XCHC_Together_User_Personas.pdf")}>user personas</a> and an analysis of pain points</li>
                <li>Wireframes and the start of some <a href={require("assets/img/figma_mocks.png")}>higher fidelity mockups</a> in figma</li>
                <li><a href="https://github.com/CashlessSociety/together_app/">Source code</a> for a flutter  <a href={require("assets/img/start_app.png")}>mobile app</a>.</li>
                <li>An archictecture and the <a href="https://github.com/CashlessSociety/cashless-ui/tree/main/server">start of some code</a> taking us rapidly towards a more autonomous, decentralized version based on <a href="https://scuttlebutt.nz/docs/protocol/">secure scuttlebutt</a>.</li>
              </ul>
            
              <p>
                We're working on:
              </p>
              <ul>
                <li>Finishing our initial beta and getting feedback and testing.</li>
                <li>Figuring out the protocol details, future technical roadmap, and white paper.</li>
                <li>Getting the word out and growing the energy. Why not join us?</li>
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