import React from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./pages/homepage";
import { ToastContainer } from "react-toastify";
import AboutUsPage from "./pages/about-us";
import ServicePage from "./pages/service";
import ContactUsPage from "./pages/contact-us";
import ScrollToTop from "./component/globals/ScrollToTop";
import MusicDistPage from "./pages/service/music-distribution";
import VideoDistPage from "./pages/service/video-distribution";
import RoyaltyServicePage from "./pages/service/royalty-management";
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
        <ScrollToTop>
          <Routes>
            <Route element={<HomePageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/music-distribution" element={<MusicDistPage/>} />
              <Route path="/video-distribution" element={<VideoDistPage/>} />
              <Route path="/royalty-management" element={<RoyaltyServicePage/>} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
