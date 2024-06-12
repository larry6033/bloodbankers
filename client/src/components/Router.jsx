import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "../pages/Home";
import Layout from "../pages/Layout";
import Notfound from "../pages/Notfound";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {/* <Homepage /> */}
            </Layout>
          }
        />
       
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
