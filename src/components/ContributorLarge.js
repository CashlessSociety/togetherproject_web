import React from "react";

const ContributorLarge = (props) => {
  const flipProfileUrl = props.flipProfileUrl || props.profileUrl;
  return (
    <>
      <div className="contributor contributor-large">
        <div className="front">
          <div className="contributor-image">
            <img
              alt="contributor"
              src={props.profileUrl}
            ></img>
          </div>
          <div className="contributor-bio">
            <h6><span className="highlight-underline-primary">{props.name}</span></h6>
            <div className="contributor-short-bio">
              {props.bio}
            </div>
            <div className="contributor-from">
              <div className="contributor-init">
                 {props.init}
              </div>
              <div className="contributor-arrow">
                  ⤑
              </div>
              <div className="contributor-now">
                 {props.now}
              </div>
            </div>
            <div className="contributor-links">
              {props.bioLinks}
            </div>
          </div>
        </div>
        <div className="back">
          <div className="contributor-image">
            <img
              alt="contributor"
              src={flipProfileUrl}
            ></img>
          </div>
          <div className="contributor-bio">
            {/* <h6 className="contributor-title">{props.title}</h6> */}
            <div className="contributor-long-bio">
              {props.longBio}
            </div>
            <div className="contributor-links">
              {props.bioLinks}
            </div>
          </div>
        </div>
      </div>
    </>
    )
};


export default ContributorLarge;

