import React from 'react';
import ContributorLarge from './ContributorLarge.js'
// reactstrap components
import {
  Container, Row, Col
} from "reactstrap";

function Contributors() {
  return (
    <>
      <div id="contributors" className="contributors">
        <Container>

          <Row>
            <Col md="12">
              <h3 className="title text-center">Contributors</h3>
              <p>At a time of global anxiety, it's refreshing to see people hailing from four different continents coming together to create togetherness. Our key contributors (so far) are:</p>
            </Col>
          </Row>    
          <Row>
            <Col md="2"></Col>
            <Col md="4">
              <ContributorLarge 
                name="Miles Thompson"
                title="Co-Summoner"
                bio={
                    <p>Technologist, sociologist, optimist.</p>
                }
                init="Lower Hutt, NZ"
                now="Kāpiti, NZ"
                profileUrl={require("assets/img/miles.png")}
                flipProfileUrl={require("assets/img/miles_img.jpg")}
                longBio={
                  <p>Miles is the co-founder of <a href="http://cashless.social">Cashless</a>, a decentralised autonomous collective building new forms of resilient, open source, mutual credit. He is also AI lead dev at <a href="http://papareo.nz">Papa Reo</a>, an Iwi led project focused on indigenous language. Previously, founding CTO at NY financial research company <a href="https://creditsights.com">CreditSights</a>.</p>
                }
                bioLinks={
                  <>
                    <a href="https://github.com/utunga" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/milesthompson" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </>
                }
              />
            </Col>
            <Col md="4">
              <ContributorLarge 
                name="Dmitriy Ageyev"
                title="Co-Summoner"
                bio={
                    <p>Community activist, systems thinker, mobile developer.</p>
                }
                init="Almaty, KZ"
                now="Golden Bay, NZ"
                profileUrl={require("assets/img/dmitriy.png")}
                flipProfileUrl={require("assets/img/dmitriy_img_2.jpg")}
                longBio={
                  <p>Dmitriy is nature lover, permaculturist, community activist, systems thinker, holistic health practitioner and mobile developer. He cares about creating new economic systems which work in synergy with the natural world and introducing new tools to the local community.</p>
                }
                bioLinks={
                  <>
                    <a href="https://github.com/diam0s" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </>
                }
              />
            </Col>
            <Col md="2"></Col>
          </Row>              
          <Row>
            <Col md="2"></Col>
            <Col md="4">
              <ContributorLarge 
                  name="Courtney Beadel"
                  title="UX Designer"
                  bio={
                      <p>UX content strategist, designer, composer.</p>
                  }
                  init="Davenport, IA, USA"
                  now=" Minneapolis, MN, USA"
                  profileUrl={require("assets/img/courtney.png")}
                  flipProfileUrl={require("assets/img/courtney_img.jpg")}
                  longBio={
                    <p>Courtney got her start as a Drupal Solutions Architect specializing in accessible information design for public libraries. In 2014, she began to transition into roles focused on user experience and content design. An award-winning jazz composer, she loves working on projects that facilitate community and art.</p>
                  }
                  bioLinks={
                    <>
                      <a href="https://github.com/courtbee" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </>
                  }
                />
              </Col>
              <Col md="4">
                <ContributorLarge 
                name="Preston Hegel"
                title="Exchange Operator"
                bio={
                  <p>Regenerative artist, community builder, experience designer
                  </p>
                }
                longBio={
                  <p>Preston is the steward of <a href="https://www.xchc.co.nz/">XCHC</a>, a Global Shaper, and advisor/collaborator on creative projects across Aotearoa, the US, and the Cook Islands. He's passionate about developing alternative tools and models that enable artists to experiment with culture and have a greater positive influence on society.
                  </p>
                }
                init="Asheville, NC, USA"
                now="Christchurch, NZ"
                profileUrl={require("assets/img/preston.png")}
                flipProfileUrl={require("assets/img/preston_img.jpg")}
                bioLinks={
                  <>
                    <a href="https://www.xchc.co.nz/team" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-web"></i>
                    </a>
                  </>
                }
              />
            </Col>
            <Col md="2"></Col>
          </Row>              
          <Row>
            <Col md="2"></Col>
            <Col md="4">
              
              <ContributorLarge 
                name="Jinxin Ma"
                title="Flutter App Dev"
                bio={
                  <p>Mobile Dev, Tech lead at Chatterize</p>
                }
                longBio={
                  <p>Previously an English translator, Kane is now a full-stack developer who builds applications for web, mobile, and servers. He's interested in game design and development as well as crypto and smart contracts. He aspires to create something that will bring people closer together and build stable and reliable communities.</p>
                }
                profileUrl={require("assets/img/kane.png")}
                flipProfileUrl={require("assets/img/kane_img.jpg")}
                init="Qingdao, China"
                now="Qingdao, China"
                bioLinks={
                  <>
                    <a href="https://github.com/mjxchina" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jinxin-ma/" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </>
                }
              />
            </Col>
            <Col md="2"></Col>
          </Row>              
        </Container>
          
      </div>
    </>
  );
}

export default Contributors;


