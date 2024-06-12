import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Layout({ children }) {
    return (
      <div>
        <Nav/>
        <main className="flex-1 min-h-screen">{children}</main>

        <Footer />
   
      </div>
    );
  }
  export default Layout;
  


 

