import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
