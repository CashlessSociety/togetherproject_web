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
              <h3 className="title text-center">Who are we?</h3>
              <p>At a time of global instability it's nice to see people hailing from such diverse locations coming together to build togetherness.</p>
            </Col>
          </Row>    
          <Row>
            <Col md="2"></Col>
            <Col md="4">
              <ContributorLarge 
                name="Miles Thompson"
                title="Co-Summoner"
                bio={
                    <p>Technolgist, sociologist, optimist.</p>
                }
                init="Lower Hutt, NZ"
                now="Kāpiti, NZ"
                profileUrl={require("assets/img/miles.png")}
                flipProfileUrl={require("assets/img/miles_img.jpg")}
                longBio={
                  <p>Currently machine learning at <a href="http://papareo.nz">papareo.nz</a>, an Iwi led project focused on indigenous language. Also <a href="http://cashless.social">Cashless.social</a> a decentralized autonomous collective building new forms of resilient, open source, mutual credit. Previously, founding CTO at NY financial research company <a href="https://creditsights.com">CreditSights</a>.</p>
                }
                bioLinks={
                  <>
                    <a href="https://github.com/utunga" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/milesthompson" target="_blank">
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
                    <p>Community actvist, systems thinker, mobile developer.</p>
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
                    <a href="https://github.com/utunga" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/milesthompson" target="_blank">
                      <i className="fab fa-linkedin"></i>
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
                name="Preston Hegel"
                title="Exchange Operator"
                bio={
                  <p>Community leader, artist.</p>
                }
                longBio={
                  <p>Hailing from Asheville NC Preston is... </p>
                }
                init="Asheville, NC, USA"
                now="Christchurch, NZ"
                profileUrl={require("assets/img/preston.png")}
                flipProfileUrl={require("assets/img/preston_img.jpg")}
                bioLinks={
                  <>
                    <a href="https://www.xchc.co.nz/team" target="_blank">
                      <i className="fab fa-web"></i>
                    </a>
                  </>
                }
              />
            </Col>
            <Col md="4">
              <ContributorLarge 
                name="Jinxin Ma"
                title="Flutter App Dev"
                bio={
                  <p>Mobile Dev</p>
                }
                longBio={
                  <p>Tech lead at chatterize </p>
                }
                profileUrl={require("assets/img/kane.png")}
                flipProfileUrl={require("assets/img/kane_img.jpg")}
                init="Qingdao, China"
                now="Qingdao, China"
                bioLinks={
                  <>
                    <a href="https://www.xchc.co.nz/team" target="_blank">
                      <i className="fab fa-web"></i>
                    </a>
                  </>
                }
              />
            </Col>
            <Col md="2"></Col>
          </Row>              
        </Container>
  
        {/*               
             <ContributorLarge 
              name="Karen Lo"
              title="Designer"
              bio={
                <p>Full-Stack UX &amp; Product Designer</p>
              }
              longBio={
                <p>UX/UI systems/platforms designer who's been jamming for the past 10+ years. Taking things from conception to implementation – from big picture to fine details.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Side&eyebrowType=Default&mouthType=Twinkle&skinColor=Light'}
              flipProfileUrl={require("assets/img/karen_lo.jpg")}
              bioLinks={
                <>
                  <a href="https://linkedin.com/in/lokaren" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/karenkun" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </>
              }
            /> */}
          
      </div>
    </>
  );
}

export default Contributors;


