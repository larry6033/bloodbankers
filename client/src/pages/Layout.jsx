// import Nav from "../components/Nav";
// import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div>
      {/* <Nav /> */}
      <main className="min-h-[100vh]">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
