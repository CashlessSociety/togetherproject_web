import React from "react";

// reactstrap components
// import { } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import VideoHeader from "components/Headers/VideoHeader.js";
import ContactForm from "components/ContactForm.js";
import HowTheApp from "components/HowTheApp.js";
import Features2 from "components/Features-2.js";
import CardAndKeys from "components/CardAndKeys.js";
import IntroRow from "components/IntroRow.js";
import Governance from "components/Governance.js";

function IndexPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
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
      <IndexNavbar />
      <div className="wrapper">
        <VideoHeader />
        <IntroRow />
        <CardAndKeys />
        <HowTheApp />
        <Features2 />
        <Governance />
        <ContactForm />
        <DefaultFooter />
      </div>
    </>
  );
}

export default IndexPage;
