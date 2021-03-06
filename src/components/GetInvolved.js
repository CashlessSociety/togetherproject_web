import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import '@typeform/embed/build/css/widget.css'

// core components

function GetInvolved() {
  return (
    <>
      <div id="get-involved" className="get_involved">
        <div className="py-5 my-5">
          <Container>
            <h2 className="title text-center">Get involved</h2>
            <Row>
              <Col lg="1"></Col>
              <Col lg="10">
                <p>We’re looking for “people like you” to help us with our mission. Join us, and shape the future of how people connect with their creative communities.</p>
                <p>Right now we especially want to map and understand the 'problem space' better so we're looking for:
                </p>
                <ul>
                <li><b>Artists</b> and creatives willing to work closely with us to talk through your collaborative process and help guide the creation of a platform that is most useful to you
                </li>
                <li><b>Designers</b> who can understand and capture those needs in user experience form - as mockups, figma designs and prototypes.
                </li>
                <li><b>Developers</b> who can help realise this vision</li>
                <li><b>Beta testers</b> from XCHC who can help us test the project once it goes live.
                </li>
                </ul>
                <p>If you are any of the above or just interested in this project please let us know and we'll get in touch. 
                </p>
                <p>As an open source project, you're also always welcome to take this project in whatever direction interests you. Feel free to clone the project source and make your own changes. Or if you wish, find a 'a good first issue' and get coding. 
                </p>                
              </Col>
              <Col lg="1"></Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardBody className="p-4">

                    <div data-tf-widget="zeWWyNdY" data-tf-iframe-props="title=Together Project" data-tf-medium="snippet" style={{"width":"100%","height":"400px"}}></div>
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
