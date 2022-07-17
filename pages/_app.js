import { useEffect } from "react";
import Layout from "../components/Layout";
import CookieConsent from "react-cookie-consent";
import "../styles/main.scss";

//TODO - Remove Debugging from cookie consent for production
//TODO - update cookie consent date
//TODO - add privacy policy link

function MyApp({ Component, pageProps }) {
  // importing Bootstrap js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent
        disableStyles={true}
        debug={false}
        // flipButtons={true}
        location="bottom"
        // style={{ fontFamily: "Quicksand, sans-serif", textAlign: "center" }}
        buttonWrapperClasses="d-flex justify-content-end"
        buttonClasses="btn btn-primary"
        containerClasses="alert alert-primary fixed-bottom d-sm-flex justify-content-between"
        contentClasses="text-capitalize text-center d-flex fs-6"
        buttonText="I Understand"
        expires={1}
      >
        This site uses Cookies for performance improvements.
      </CookieConsent>
    </>
  );
}

export default MyApp;
