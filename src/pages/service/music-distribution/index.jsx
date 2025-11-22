import React from "react";
import { Link } from "react-router-dom";
import * as CiIcons from "react-icons/ci";
import * as MdIcons from "react-icons/md";
import { musicDistService } from "../../../data/service";



const MusicDistPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1 lg:gap-3 items-center mt-20 px-6 lg:px-0 py-6 lg:py-18">
        <h1 className="font-bold text-2xl lg:text-6xl mb-8">Music Distribution</h1>
        <span className="lg:text-2xl text-center">
          Distribute your music globally - Keep control, maximize reach
        </span>
        <Link to="/" className="scaleBannerImg px-6 py-2 lg:text-[18px] bg-primary-light rounded-lg">
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
          {musicDistService?.map((item, i) => {
            const IconComponent = CiIcons[item.icon] || MdIcons[item.icon];

            return (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl scaleItem">{IconComponent ? <IconComponent /> : null}</span>
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
          <div className="text-xl flex flex-col gap-5 pl-10">
            <li>Sign up & upload Tracks</li>
            <li>Add Metadata & Artwork</li>
            <li>Submit for Distribution</li>
            <li>Monitor Streams & Earnings</li>
          </div>
        </div>

        <div className="flex items-center md:w-[290px] mx-auto lg:mx-0 lg:w-[300px] dancingSlide text-end">
          <img src="/public/images/music-stores/apple.png" alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default MusicDistPage;
