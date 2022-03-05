import React from "react";

const ContributorSmall = (props) => {
  return (
    <>
        <div className="contributor-small">
          <div className="contributor-image">
            <img
              className="default-image"
              alt="contributor"
              src={props.profileUrl}
            ></img>
          </div>
          <div className="contributor-bio">
            <h6>
              <span className="highlight-underline-primary">{props.name}</span>
            </h6>
            <div className="contributor-bio-small">
              {props.bio}
            </div>
            <div className="contributor-links">
              {props.oneLink}
            </div>
          </div>
        </div>

    </>
    )
};


export default ContributorSmall;

