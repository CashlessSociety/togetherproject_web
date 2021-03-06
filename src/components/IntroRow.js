import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

// FIXME add attribution (if this looks ok)
// Photo by <a href="https://unsplash.com/@pabloheimplatz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pablo Heimplatz</a> on <a href="https://unsplash.com/s/photos/sunrise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

function IntroRow() {
  return (
    <>
      <div id="intro-row" className="intro-row custom-features text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              
              <h4 className="description sub">
                 A collaboration between <a href="https://cashless.social">Cashless</a> and <a href="https://xchc.co.nz">XCHC (Exchange Christchurch)</a>
               </h4>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className="info info-hover">
              <div className="icon icon-success icon-circle">
                  <i className="now-ui-icons objects_key-25"></i>
                </div>
               
                <h4 className="info-title"> A simple app for working together</h4>
               
                  <p className="description">
                      Join projects that interest you. Be notified when a request is relevant to your skills or interests. Gather people to help out on your projects!
                    </p> 
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
              <div className="icon icon-primary icon-circle">
                  <i className="now-ui-icons ui-2_favourite-28"></i>
                </div>
                <h4 className="info-title">Making gratitude <br /> visible.</h4>
                  <p className="description">
                  Communities build connections with gratitude. Gifts of kindness help new members feel visible and core team members reciprocated and valued.
                  </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons ui-1_simple-remove nudge-right"></i>
                  <i className="now-ui-icons ui-2_like nudge-left"></i>
                </div>
                <h4 className="info-title">No "optimizing engagement"</h4>
                <p className="description">
                   Keeping it open source means we're not trying to lock you in. We want you out there doing awesome stuff. Mutuality is our purpose, gratitude our currency, creativity our potential.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default IntroRow;