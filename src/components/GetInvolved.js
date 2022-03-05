import React from "react";

// reactstrap components
import { Card, CardBody, Button, Container, Row, Col } from "reactstrap";

// core components

function GetInvolved() {
  return (
    <>
      <div id="get-involved" className="get_involved">
        <div className="py-5 my-5">
          <Container>
            <h2 className="title text-center">Is this for you?</h2>
            <Row>
              <Col lg="6">
                
                  {/* <div className=" text-left">
                    <img alt="future" src={require("assets/img/future.png")}></img>
                    <h5 className="info-title font-weight-bold">Yes - let's work together!</h5>
                    <p>
                    The above is a summary of the work so far. But there are many ways to enable peer-to-peer mutual credit. You may already be working on another related project. Let's not work in isolation! At this stage we are open to  contributions and partnerships that take us in new directions as far as product design goes. Just so long as we are all working on solving mutual credit within the "boundaries of collaboration" described below (or to the right) then we want to hear from you.     
                    </p>
                    <p>Right now we're expanding our list of advisors through private contacts. We also especially want to hear from potential collaborators if you think you might be able to:</p>
                    <ul>
                      <li>Help us design our the fundamentals of our token issuance and DAO founding documents.</li>
                       <li>Help us build healthy processes that recognize and value our contributors within a DAO context.</li>
                      <li>Help us design the front end experience and/or build code and smart contracts in React, Rust, Holochain/SSB or NodeJs</li>
                      <li>Help us with the protocol, whitepaper and  simulations.</li>
                      <li>Be a pilot community and connect us to real world people and real world needs.</li>                  
                    </ul>
                    <p>Contributors will earn tokens that convey governance voting rights as well as a share in future profits of our DAO, as explained in <a href="https://mutualaidworld.gitbook.io/cashless/">our contributors handbook</a>.  
                    </p>
                  </div> */}
                
              </Col>
              <Col lg="5" className="offset-lg-1">
                
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardBody className="p-4">
                     <p>If you can get behind the above principles and want to change the future, let us know </p>
                      <a className="btn-large  btn-round btn-success cta_button" href="https://mp72k7t29rj.typeform.com/to/GfVdv7Uz">
                          <i className="now-ui-icons ui-2_favourite-28"></i>&nbsp;
                          Yes, I'm interested !
                      </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

 
export default GetInvolved;
