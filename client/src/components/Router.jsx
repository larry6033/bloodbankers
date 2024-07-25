import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Notfound from "../pages/Notfound";
// import Signup from "../pages/Signup";
import Loginregister from "../pages/Loginregister";
import Hospitalsignup from "../pages/Hospitalregister";
import About from "../pages/About";
import Homepage from "../pages/Homepage";
import DonorSignup from "../pages/Donorsignup";
import Fillingform from "../pages/Fillingform";
import Alldonors from "../pages/Alldonors";
import Form from "../pages/Form";
import HospitalLogin from "../pages/HospitalLogin";
import Donorboard from "../pages/Donorboard";
import Singledonor from "../pages/Singledonor";
// import
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/form"
          element={
            <Layout>
              <Fillingform />
            </Layout>
          }
        />
        <Route
          path="/hospitallogin"
          element={
            <Layout>
              <HospitalLogin />
            </Layout>
          }
        />

        <Route
          path="/alldonors"
          element={
            <Layout>
              <Alldonors />
            </Layout>
          }
        />

        <Route
          path="/singledonor"
          element={
            <Layout>
              <Form />
            </Layout>
          }
        />

        <Route
          path="/donorsignup"
          element={
            <Layout>
              <DonorSignup />
            </Layout>
          }
        />
         <Route
          path='/singledonor'
          element={
            <Layout>
              <Singledonor />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/hospital"
          element={
            <Layout>
              <Hospitalsignup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Loginregister />
            </Layout>
          }
        />
        <Route
          path="/donorboard"
          element={
            <Layout>
              <Donorboard />
            </Layout>
          }
        />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;




// https://docs.google.com/spreadsheets/d/1AJoHnh0NOUjiyJvusXytFQ1OQsbNhyOFbX_P78VCEqI/edit?gid=173790465#gid=173790465