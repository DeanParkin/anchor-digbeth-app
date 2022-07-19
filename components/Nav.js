import Link from "next/link";
import Image from "next/image";

import logo from "../public/imgs/anchor-nav-logo-small.png"; // TODO - change the logo

// TODO - add the navbar links
// TODO - add the navbar logo

const Nav = () => {
  return (
    <>
      <nav className="navbar sticky-top shadow navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <div className="me-2" style={{ height: "60px" }}>
            <h1 className="m-0">
              <span hidden={true}>The Anchor Digbeth, Birmingham</span>
            </h1>
            <div style={{ width: "60px", height: "60px" }}>
              <Image
                src={logo}
                alt="The Anchor Digbeth"
                width={120}
                height={120}
                className="navbar-brand"
                priority={true}
              />
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item me-2">
                <Link href="/">
                  <a
                    className="nav-link"
                    aria-current="page"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/drinks">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                  >
                    Drinks
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/gallery">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                  >
                    GALLERY
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/events">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                  >
                    Events
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/giftvoucher">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                  >
                    Gift Voucher
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/contact">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                  >
                    CONTACT
                  </a>
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
