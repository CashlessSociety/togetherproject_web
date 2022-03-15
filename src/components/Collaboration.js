import React from "react";

// reactstrap components
import { Container, Row, Col, Card, CardBody, CardTitle, CardFooter } from "reactstrap";

// core components

function Collaboration() {
  return (
  <>
    <div id="Collaboration" className="collaboration testimonials-2 custom-features bg-sunset">
      <Container>
        <Row>
            <Col md={6}>
                <div>
                    <h3>Why this collaboration, now?</h3>
                    <p>
                        <b>Cashless</b> is keen to understand (and solve) the user experience around exchanges of real world acknowledgements and value. 
                    </p>
                    <p>
                        <b>Exchange Christchurch</b> has been testing and exploring new ways for  communities to work together for a while and is keen to find new ways to measure and acknowledge value in our communities.
                    </p>
                    <p>
                        <b>Working together</b> our collective objective is to create a platform that makes participation acknowledgments easy and can become a useful tool for bringing people together to do awesome things across a wide range of communities.</p>
                    <div className="logo-container">
                        <div className="logox xchc-logo"><img src={require("assets/img/xchc_logo_white.png")} /></div>
                        <div className="logox cashless-logo"><img src={require("assets/img/cashless_logo_white.png")} /></div>
                    </div>
                </div>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
                <Card className="card-testimonial card-plain">
                    <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/preston_img.jpg")}
                            ></img>
                        </a>
                    </div>
                    <CardBody>
                        <h5 className="card-description">
                            “It feels impossible to measure how much value everyone adds. But it's really how shit gets done. Not only at our space, but behind the scenes is a nationwide group of people supporting each other in all kinds of ways. That's where the real magic of community lies and there's so much more potential that current platforms aren't designing for; for current members and new members.”
                        </h5>
                    <CardTitle tag="h3">Preston Hegel</CardTitle>
                    <CardFooter>
                        <h6 className="category text-info">XCHC Director of Operations</h6>
                    </CardFooter>
                    </CardBody>
                </Card>
            </Col>
        </Row> 
      </Container>
    </div>
  </>
  );
}

export default Collaboration;
