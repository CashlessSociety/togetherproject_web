/*eslint-disable*/
import React from "react";

// reactstrap components
// import { } from 'reactstrap';

// core components



// Video by Akash Sudan from Pexels

function NetworkHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div id="video-header" className="hero page-header clear-filter" >
        <div className="page-header-video"
            ref={pageHeader}>
          <video 
              playsInline="playsinline" 
              autoPlay="autoplay" 
              muted="muted" 
              loop="loop"
              poster={require("assets/img/video_cover_min.png")} >
            <source src={require("assets/img/output.mp4")} type="video/mp4" />
            <source src={require("assets/img/output.webm")} type="video/webm" />
            <source src={require("assets/img/output.ogv")} type="video/ogg" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-8 col-md-8 overlay_panel">
                  <h1 className="title">The Together Project</h1>
                  <h3>We're building an open-source platform to connect&nbsp;
                  <b>real</b> people working on <b>real</b> projects in the <b>real</b> world.
                  </h3>
            </div>
            <div className="col-lg-2 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NetworkHeader;
