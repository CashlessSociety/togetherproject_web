import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Blog() {
  return (
    <>
      <div id="blog" className="custom-features blog">
        <Container>
        
         <Row>
           
            <Col md={3} className="pt-5">
              <img
                alt="working"
                src={require("assets/img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg")}
              ></img>
            </Col>

             <Col md={8}>
              <h4 className="title">Blog Posts</h4>
              
              <ul>
                <li><a href="https://utunga216.medium.com/the-together-project-8884e7521e35" target="_blank" rel="noopener noreferrer"><b>April 18 2022</b><br/> Introducing The Together Project</a></li>

              </ul>
            
      
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Blog;