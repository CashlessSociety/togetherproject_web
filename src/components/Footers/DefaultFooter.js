/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://github.com/cashlesssociety/togetherproject"
                  target="_blank"
                >
                  Together Source Code
                </a>
              </li>
              <li>|</li>
              <li>
                <a
                  href="https://github.com/CashlessSociety"
                  target="_blank"
                >
                  Cashless
                </a>
              </li>
              <li>|</li>
              <li>
                <a
                  href="https://xchc.co.nz/"
                  target="_blank"
                >
                  XCHC (Exchange Christchurch)
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
