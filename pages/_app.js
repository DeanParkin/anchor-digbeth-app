import { useEffect } from "react";
import Layout from "../components/Layout";
import CookieConsent from "react-cookie-consent";
import "../styles/main.scss";

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
        style={{ fontFamily: "Quicksand, sans-serif", textAlign: "center" }}
        buttonStyle={{
          fontFamily: "Quicksand, sans-serif",
          background: "#B3D6D2",
        }}
        buttonText="I Understand"
        expires={1}
      >
        This site uses Cookies
      </CookieConsent>
    </>
  );
}

export default MyApp;
