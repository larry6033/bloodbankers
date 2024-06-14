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
          path="/donorform"
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

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
