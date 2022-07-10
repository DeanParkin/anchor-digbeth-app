import Nav from "./Nav";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <div className="">{children}</div>
      {/* <NewsLetter /> */}
      <Footer />
    </>
  );
};

export default Layout;
