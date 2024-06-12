import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Layout from "../pages/Layout";
import Notfound from "../pages/Notfound";
import About from "../pages/About";
import Services from "../pages/Services";
import BloodDrive from "../pages/BloodDrive";
import Login from "../pages/Login"
import Signup from "../pages/Signup";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />            
      <Route
          path="/about"
          element={<Layout><About/></Layout>
            
          }
        />
       
           <Route
          path="/services"
          element={<Layout><Services/></Layout>
            
          }
        />
       
  
       <Route
          path="/bloodDrive"
          element={<Layout><BloodDrive/></Layout>
            
          }
        />
      <Route
          path="/login"
          element={
            <Layout>
              <Login/>
              
            </Layout>
          }
        />
              <Route
          path="/signup"
          element={<Layout><Signup/></Layout>
            
          }
        />
          
        <Route path="*"
        element={
        <Notfound />} 
        />

      </Routes>
    </BrowserRouter>
  ); gsz
}
export default Router;
