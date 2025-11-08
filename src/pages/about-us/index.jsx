import React from "react";
import CreateMusicGroup from "../../component/about-us/CreateMusicGroup";
import MusicByNumbers from "../../component/about-us/MusicByNumbers";
import RecordLabelSection from "../../component/about-us/RecordLabelSection";
import WorkWithUs from "../../component/about-us/WorkWithUs";
import PowerPlayers from "../../component/about-us/PowerPlayers";

const AboutUsPage = () => {
  return (
    <div className="w-full flex text-white mt-20">
      <div className="w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-bold border-l border-r border-gray-700">
        ABOUT US
      </div>
      <div className="w-[85%] lg:w-[92%]">
        <CreateMusicGroup />
        <MusicByNumbers />
        <RecordLabelSection />
        <WorkWithUs />
        <PowerPlayers />
      </div>
    </div>
  );
};

export default AboutUsPage;
