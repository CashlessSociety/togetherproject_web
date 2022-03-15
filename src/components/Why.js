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
         <Col md={5} className="order-md-first">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fjv8qxqn.json"  background="transparent"  speed="0.6"  style={{width: "100%", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
          <Col md={7}>
              <div>
              <h3>The 'Anti' Social Network..</h3>
              <p>
                We want to build connection on the real social network. Useful tools connecting real people doing real work together.
              </p>
              <p>
                Seemingly informal online communities are starting to mediate and organise ever larger  sums of money. But using most existing social media spaces - with their likes and emojis and 'upvotes' - is like getting in a spaceship with a troupe of drunken monkeys in the driver's seat. It might be fun for a bit, but it's not a great way to get organized - and we all know it's not going to end well for anyone except the monkey.
              </p>
            </div>
          </Col>
   
        </Row> 

        <Row>
          <Col md={7} className="pr-5">
            <div>
              <h3>Time for a new paradigm.</h3>
              <p>
                We don't have all the answers yet, but we know real value comes from creating real experiences with others. So let's choose those and follow that energy. Sign up, and add yourself to a network of people who choose being a participant over being a passer-by. Let's build something amazing.. together.
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
      </Container>
    </div>
  </>
  );
}

export default Why;
