import MusicByNumbers from "../../component/about-us/MusicByNumbers";
import RecordLabelSection from "../../component/about-us/RecordLabelSection";
import WorkWithUs from "../../component/about-us/WorkWithUs";
import PowerPlayers from "../../component/about-us/PowerPlayers";
import AbioutUsIntro from "../../component/about-us/AbioutUsIntro";
import { useEffect } from "react";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full flex text-white mt-10 pb-20">
      <div className="w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-extrabold border-l border-r border-gray-700">
        ABOUT US
      </div>
      <div className="w-[85%] lg:w-[92%]">
        <AbioutUsIntro />
        {/* <MusicByNumbers /> */}
        {/* <RecordLabelSection /> */}
        <WorkWithUs />
        {/* <PowerPlayers /> */}
      </div>
    </div>
  );
};

export default AboutUsPage;
