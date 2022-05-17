import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function scrollIntoViewAdjusted(element) {
    var headerOffset = 40;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    console.log("scrolling to " + offsetPosition)
    console.log(element)
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-at-top");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 9 ||
        document.body.scrollTop > 9
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 10 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-at-top");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              onClick={(e) => {
                document
                  .getElementById("video-header")
                  .scrollIntoView();
              }}
            >
             The Together Project
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

                            
             <NavItem>
                <NavLink
                  href="#intro-row" onClick={(e) => {
                    e.preventDefault();
                    scrollIntoViewAdjusted(document.getElementById("intro-row"));
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  What
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#contributors" onClick={(e) => {
                    e.preventDefault();
                    scrollIntoViewAdjusted(document.getElementById("contributors"));
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Who
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#why" onClick={(e) => {
                    e.preventDefault();
                    scrollIntoViewAdjusted(document.getElementById("why"));
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Why
                </NavLink>
              </NavItem>
            
              <NavItem>
                <NavLink
                  href="#status" onClick={(e) => {
                    e.preventDefault();
                    scrollIntoViewAdjusted(document.getElementById("status"));
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Status
                </NavLink>
              </NavItem>


              <NavItem>
                <NavLink
                  href="#blog" onClick={(e) => {
                    e.preventDefault();
                    scrollIntoViewAdjusted(document.getElementById("blog"));
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#get-involved" onClick={(e) => {
                    e.preventDefault();
                    scrollIntoViewAdjusted(document.getElementById("get-involved"));
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Get Involved
                </NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
