import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container text-light">
          <div className="row my-4">
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
          <p className="text-center">
            Please let us know how we&apos;re doing with a{" "}
            <a href="https://g.page/TheAnchorDigbeth?share">review</a>
          </p>
        </div>
        <div className="social-container">
          <a
            href="https://www.facebook.com/TheAnchorDigbeth/"
            id="fb-link"
            aria-label="Facebook Link"
          >
            <i className="fab fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.instagram.com/theanchordigbeth"
            id="ig-link"
            aria-label="Instagram Link"
          >
            <i className="fab fa-instagram-square" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com/anchordigbeth"
            id="tw-link"
            aria-label="Twitter Link"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
