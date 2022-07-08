import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

import logo from "../public/imgs/anchor-nav-logo.png"; // TODO - change the logo

// TODO - add the navbar links
// TODO - add the navbar logo

const Nav = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <div className="me-4 navWrap">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    HOME
                  </a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link href="/about">
                  <a className="nav-link">GALLERY</a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
