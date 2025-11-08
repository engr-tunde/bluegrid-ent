import React from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./pages/homepage";
import { ToastContainer } from "react-toastify";
import AboutUsPage from "./pages/about-us";
import ServicePage from "./pages/service";
import ContactUsPage from "./pages/contact-us";
function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route element={<HomePageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
