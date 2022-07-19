import Link from "next/link";
import Image from "next/image";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import logo from "../public/imgs/anchor-nav-logo-small.png";
import { useRouter } from "next/router"; // TODO - change the logo
import Router from "next/router";
//import { Collapse } from "bootstrap";
//import * as bootstrap from "bootstrap";
// TODO - add the navbar links
// TODO - add the navbar logo

export default function Nav(props) {
  const route = useRouter().route.slice(1);
  const router = useRouter();

  let home =
    route == ""
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let drinks =
    route == "drinks"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let events =
    route == "events"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let contact =
    route == "contact"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let gallery =
    route == "gallery"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };
  let giftvoucher =
    route == "giftvoucher"
      ? { class: "nav-link active", aria: "page", href: "/" }
      : { class: "nav-link", aria: "", href: "/" };

  const handleClick = (e) => {
    //e.preventDefault();
    router.push(e.target.href);
    // let tog = document.getElementById("navbarToggler");
    // () => {
    //   tog.collapse({ toggle: false }).collapse("hide");
    // };
  };

  return (
    <>
      <SEO />
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
                <a
                  href="/"
                  className={home.class}
                  onClick={handleClick}
                  //aria-current={home.aria}
                  //aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                >
                  HOME
                </a>
              </li>
              <li
                className="nav-item me-2"
                //data-bs-toggle="collapse"
              >
                <a
                  href="/drinks"
                  className={drinks.class}
                  onClick={handleClick}
                  //aria-current={home.aria}
                  //aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                >
                  Drinks
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="/gallery"
                  className={gallery.class}
                  onClick={handleClick}
                  //aria-current={home.aria}
                  //aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="/events"
                  className={events.class}
                  onClick={handleClick}
                  //aria-current={home.aria}
                  //aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                >
                  Events
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="/giftvoucher"
                  className={giftvoucher.class}
                  onClick={handleClick}
                  //aria-current={home.aria}
                  //aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                >
                  gift voucher
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  href="/contact"
                  className={contact.class}
                  onClick={handleClick}
                  //aria-current={home.aria}
                  //aria-current="page"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
      <Footer />
    </>
  );
}
