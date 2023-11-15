import Nav from "../Nav/nav";

const RootLayout = ({ children }) => {
  return (
    <>
      <Nav />

      <main>{children}</main>
    </>
  );
};

export default RootLayout;
