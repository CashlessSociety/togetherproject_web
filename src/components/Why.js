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
         <Col md={4} className="order-md-first">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fjv8qxqn.json"  background="transparent"  speed="0.6"  style={{width: "100%", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
          <Col md={8}>
              <div>
              <h3 className="info-title">A "network-level" experiment</h3>
              <p className="lead">
               This project is an experiment and a collaboration - at a network level. Cashless as a project is keen to understand the user experience around real world acknowledgements and  value. Working together with the folks at XCHC our collective objective is to design and create a user experience that can become a useful tool for bringing amazing people together to do awesome things. 
              </p>
            </div>
          </Col>
   
        </Row> 

        <Row>
          <Col md={7} className="pr-5">
            <div>
              <h3 className="info-title">The 'Anti' Social Network..</h3>
              <p className="lead">
                We want to build connection on the real social network. Useful tools connecting real people doing real work together.
              </p>
              <p className="lead">
                Online communities, such as Distributed Autonomous Organisations are starting to mediate and organise large sums of money and have real impact. But engaging with most social media spaces - with their likes and emojis and 'upvotes' - is like getting a spaceship with a troupe of drunken monkeys in the driver's seat. It might be fun for a bit, but we all know it's not going to end well for anyone except the monkey.
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
          <Col md={7} className="pr-5">
            <div>
              <h3 className="info-title">Time for a new paradigm.</h3>
              <p className="lead">
                We don't know the exact solution yet but we want to start by acknowledging exchanges of real value in the real world so we can start to make the underlying 'real' social graph visible. 
              </p>
              <p className="lead">
                Our strategy is to start offline first, find the real social graph, and then bring just enough of that online to help people collaborate and then. We'll see what happens..
              </p>
            </div>
          </Col>
          <Col md={5}>
          </Col>
        </Row>    
      </Container>
    </div>
  </>
  );
}

export default Why;
