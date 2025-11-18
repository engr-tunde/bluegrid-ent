import React, { useEffect } from "react";
import ProductServiceSection from "../../component/homepage/ProductServiceSection";
import NewsArticleSection from "../../component/homepage/NewsArticleSection";
import TrustedByArtist from "../../component/homepage/TrustedByArtist";
import HomeHeroSection from "../../component/homepage/HomeHeroSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full ">
      <HomeHeroSection />
      <div className="w-full lg:pl-20">
        <ProductServiceSection />
        <TrustedByArtist />
        <NewsArticleSection />
      </div>
    </div>
  );
};

export default HomePage;
