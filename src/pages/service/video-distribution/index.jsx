import React from "react";
import { Link } from "react-router-dom";
import * as CiIcons from "react-icons/ci";
import * as MdIcons from "react-icons/md";
import { videoDistService } from "../../../data/service";

const VideoDistPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1 lg:gap-3 items-center mt-20 px-6 lg:px-0 py-6 lg:py-18">
        <h1 className="font-bold text-2xl lg:text-6xl mb-8">
          Video Distribution
        </h1>
        <span className="lg:text-2xl text-center">
          Distribute your video content to major platforms - monetize, protect
          and grow
        </span>
        <Link
          to="/"
          className="scaleBannerImg px-6 py-2 lg:text-[18px] bg-primary-light rounded-lg"
        >
          Get Started
        </Link>
      </div>

      <div
        className="flex flex-col gap-5 lg:gap-10 p-8 lg:p-20"
        style={{
          backgroundImage:
            "radial-gradient(#001CA0 10%, #00167a 15%, #00136A 70%)",
        }}
      >
        <h1 className="text-2xl lg:text-5xl font-bold">Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-15">
          {videoDistService?.map((item, i) => {
            const IconComponent = CiIcons[item.icon] || MdIcons[item.icon];

            return (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl scaleItem">
                  {IconComponent ? <IconComponent /> : null}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl lg:text-2xl">{item?.title}</h3>
                  <span className="">{item?.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 p-8 lg:p-20">
        <div className="flex flex-col gap-5 lg:gap-10">
          <h1 className="font-bold text-2xl lg:text-5xl">How It Works</h1>
          <div className="text-xl flex flex-col gap-5">
            <span>Know exactly where your money is coming from everyday</span>
          </div>
        </div>

        <div
          className="lg:w-[500px]  m-auto rounded-full border-[#ffffff4f] border-4 lg:border-[10px] border-dashed"
          style={{ borderSpacing: "15px 5px", borderCollapse: "separate" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-full"
            src="/videos/bluegrid-vid-5.mp4"
          ></video>
        </div>
      </div>

      <div className="bg-primary-light flex flex-col gap-5 p-8 lg:p-20">
        <h1 className="text-3xl lg:text-5xl">Distribute Now</h1>
         <Link
          to="/contact-us"
          className="px-6 py-2 lg:text-[18px] bg-primary-deep max-w-fit rounded-lg"
        >
          Work With Us
        </Link>
      </div>
    </div>
  );
};

export default VideoDistPage;
