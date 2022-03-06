import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Why() {
  return (
  <>
    <div id="why" className="features-8 custom-features bg-sunset">
      <Container>
        <Row>
          <Col md={7} className="pr-5">
            <div>
              <h3 className="info-title">The "Anti Social Network.." Huh?</h3>
              <p className="lead">
                Going on aocial media today is like getting in a spaceship with nobody in the drivers seat - except there's a monkey messing around with the controls inside of your brain. 
              </p>
              <p className="lead">
               It might be fun for a bit, but we all know how it's going to end. Not well for anyone - except maybe the monkey.
              </p>
              <p className="lead">
                We're not even trying to 'fix' social media but it is our belief that we can build a bunch of really useful tools in a somewhat adjacent space. That is, exchanges of value on the social graph - mediated, not by trivialities, but by <b>real world connections</b> and expressions of gratitude for <b>real world exchanges of value</b>.
              </p>

            </div>
          </Col>
          <Col md={5}>
             <img
              alt="work together"
              src={require("assets/img/clip-brainstorm.png")}
            ></img>

          </Col>
        </Row>
        <Row>
          <Col md={8}>
              <div>
              <h3 className="info-title">A "network-level" experiment</h3>
              <p className="lead">
                This project is an experiment. We're not going to get it right the first time, but we aim to do some user experience experiments around the idea of acknwoledging real world value graph <b>first</b>and only bringing it into the online space afterwards. We hope - <b>with help from you</b> - to iteratively, and together, build out a user experience that can actually be a useful tool for bringing people together to do awesome things.  
              </p>
            </div>
          </Col>
   
          <Col md={4} className="order-md-first">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fjv8qxqn.json"  background="transparent"  speed="0.6"  style={{width: "100%", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
        </Row> 
      </Container>
    </div>
  </>
  );
}

export default Why;
