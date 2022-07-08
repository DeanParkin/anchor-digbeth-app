import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <div className="">{children}</div>
    </>
  );
};

export default Layout;
