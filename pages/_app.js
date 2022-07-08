import Layout from "../components/Layout";
import "../styles/main.scss";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // importing Bootstrap js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
