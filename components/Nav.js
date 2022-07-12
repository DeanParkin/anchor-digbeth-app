import Link from "next/link";
import Image from "next/image";

import logo from "../public/imgs/anchor-nav-logo.png"; // TODO - change the logo

// TODO - add the navbar links
// TODO - add the navbar logo

const Nav = () => {
  return (
    <>
      <nav className="navbar sticky-top shadow navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <div className="me-4 navWrap">
            <h1 style={{ margin: "0px" }}>
              <span hidden={true}>The Anchor Digbeth</span>
            </h1>
            <Image
              src={logo}
              width={80}
              height={80}
              alt="The Anchor has a wide range of beer"
              className="navbar-brand"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item me-2">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    HOME
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/drinks">
                  <a className="nav-link">Drinks</a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/gallery">
                  <a className="nav-link">GALLERY</a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/events">
                  <a className="nav-link">Events</a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/giftvoucher">
                  <a className="nav-link">Gift Voucher</a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/contact">
                  <a className="nav-link">CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
