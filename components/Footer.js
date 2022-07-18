import React from "react";
import NewsLetter from "./NewsLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="sticky-bottom mt-5">
        <NewsLetter />
        <div className="container footer-container text-light">
          <div className="row my-4 fs-5">
            <div className="col-md-4">
              <div className="opening-hours-container text-uppercase">
                <div className="opening-hours">
                  <p className="opening-hours-day">Monday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Tuesday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Wednesday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Thursday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Friday</p>
                  <span className="opening-hours-dots"></span>
                  <p className="opening-hours-time">12:00 - 00:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Saturday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 00:00</p>
                </div>

                <div className="opening-hours">
                  <p className="opening-hours-day">Sunday</p>
                  <div className="opening-hours-dots"></div>
                  <p className="opening-hours-time">12:00 - 23:00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-3"></div>

            {/* <div className="col-md-4 address-container"> */}
            <address className="col-md-4 address-container m-0">
              THE ANCHOR, <br />
              308 BRADFORD STREET, <br />
              BIRMINGHAM, <br />
              B5 6ET
            </address>
            {/* </div> */}
          </div>
          <p className="text-center fs-5">
            Please let us know how we&apos;re doing with a{" "}
            <a href="https://g.page/TheAnchorDigbeth?share">review</a>
          </p>
        </div>
        <div className="social-container border-top border-primary">
          <div className="container d-flex justify-content-around fs-3 align-items-center">
            <a
              href="https://www.facebook.com/TheAnchorDigbeth/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Link"
              className="py-3"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-icon"
                size="sm"
              ></FontAwesomeIcon>
              {/* <FontAwesomeIcon
              icon={["fab", faFacebook]}
              inverse
              size="sm"
              aria-hidden="true"
            /> */}
            </a>
            <a
              href="https://www.instagram.com/theanchordigbeth"
              id="ig-link"
              aria-label="Instagram Link"
            >
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="social-icon"
                size="sm"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://twitter.com/anchordigbeth"
              id="tw-link"
              aria-label="Twitter Link"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="social-icon"
                size="sm"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="copyright-container">
          <div className="container">
            <div className="copyright-container justify-content-center text-center fs-6">
              <p className="copyright mb-1">
                <span className="text-light">
                  &copy; 2020 - {new Date().getFullYear()} THE ANCHOR. ALL
                  RIGHTS RESERVED.
                </span>
              </p>
              <a
                href="https://www.anchor.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link px-3 mb-3"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.anchor.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-policy-link mb-3"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-center text-light">
                  Website developed by{" "}
                  <a href="https://www.anchor.co.uk">Plan;D</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
