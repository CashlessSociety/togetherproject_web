import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import NetworkHeader from "components/NetworkHeader";
import IntroRow from "components/IntroRow.js";
import Contributors from "components/Contributors.js";
import Collaboration from "components/Collaboration";
import Why from "components/Why.js";
import GetInvolved from "components/GetInvolved.js";
import CurrentStatus from "components/CurrentStatus.js";
import Blog from "components/Blog.js";
import OpenGraphMetaTags from "components/OpenGraphMetaTags.js";

function IndexPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    //preload video cover 
    const img = new Image();
    img.src = require("assets/img/video_cover_min.png");

    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <OpenGraphMetaTags />
      <IndexNavbar />
      <div className="wrapper">
        <NetworkHeader />
        <IntroRow />
        <Contributors />
        <Collaboration />
        <Why />
        <CurrentStatus />
        <Blog />
        <GetInvolved />
        <DefaultFooter />
      </div>
    </>
  );
}

export default IndexPage;
