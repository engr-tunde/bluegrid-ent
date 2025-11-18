import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  createMusicSectionData,
  image,
  supportedStores,
} from "../../data/homePage";
import { PiPersonSimpleSwimFill } from "react-icons/pi";
import { BiLabel } from "react-icons/bi";
import { GiMusicalNotes } from "react-icons/gi";
import { CiVideoOn } from "react-icons/ci";

const CreateMusicSection = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = image.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full flex flex-col">
      {/* <div className="bg-primary-light w-full mt-20 lg:mt-16 text-[#ffffff] flex"> */}
      <div
        className=" w-full mt-14 lg:mt-16 text-[#ffffff] flex pb-20 lg:pb-5 bg-[#000b43a5]"
        style={{
          backgroundImage:
            "radial-gradient(#001CA0 10%, #00167a 15%, #00136A 70%)",
        }}
      >
        <h1 className="hidden font-Syne w-[15%] lg:w-[8%] lg:flex items-center uppercase justify-center [writing-mode:vertical-lr] transform rotate-180 text-3xl tracking-wider font-extrabold border-l border-r border-gray-700">
          BLUEGRID ENTERTAINMENT
        </h1>
        <div className="w-full px-7 lg:px-0 lg:w-[92%] flex flex-col lg:flex-row lg:pt-20 gap-24 lg:gap-0">
          {/* Slider Section */}
          <div className="hidden w-[40%] mx-2 lg:px-0 mt-5 lg:flex flex-col lg:flex-row relative">
            <div className="w-[100%] flex flex-col gap-3 px-2">
              <h2 className="mt-4 lg:mt-0 text-2xl lg:text-4xl lg:leading-13 font-bold mb-2 uppercase">
                {/* {createMusicSectionData[current]?.title} */}
                Welcome to the Music🎷 Empire!
              </h2>
              <p className="text-sm lg:text-[17px] mb-4">
                {/* {createMusicSectionData[current]?.description} */}
                Where you have full control of your royalties as music lovers
                around the globe listen to your body of work from any where, any
                time
              </p>

              <img
                src={`/images/${image[current]}`}
                alt={createMusicSectionData[current]?.title || "slider"}
                className="w-full h-[450px] object-cover rounded-lg shadow-lg"
                style={{ boxShadow: "7px 7px 15px #000" }}
              />

              <div className="flex justify-center items-center gap-2 mt-4">
                {image.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-6 h-1 rounded-full ${
                      current === idx ? "bg-[#008ad3]" : "bg-gray-400"
                    } transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[008ad3]`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:hidden mx-2 mt-16 flex flex-col gap-3 px-2 items-center relative">
            <h2 className="mt-4 text-2xl font-bold uppercase text-center">
              Welcome to the Music🎷 Empire!
            </h2>
            <p className="text-sm text-center">
              Where you have full control of your royalties as music lovers
              around the globe listen to your body of work from any where, any
              time
            </p>
          </div>

          {/* right side: original static content restored */}
          <div className="w-[100%] lg:w-[60%] flex flex-col gap-5 lg:pt-5 lg:pl-2 relative">
            <div
              className="lg:w-[500px]  m-auto rounded-full border-[#ffffff4f] border-4 lg:border-[10px] border-dashed"
              style={{ borderSpacing: "15px 5px", borderCollapse: "separate" }}
            >
              <video
                autoPlay
                loop
                // muted
                playsInline
                className="w-full h-full rounded-full"
                src="/videos/bluegrid-vid-1.mp4"
              ></video>
            </div>

            <div
              className="absolute bg-primary-deep w-[150px] flex flex-col rounded-xl p-2 lg:p-4 -left-3 lg:left-20 top-5 lg:top-35 leftRight"
              style={{ boxShadow: "6px 6px 10px #000000d6" }}
            >
              <span className="text-[16px] -mb-1">For Artists</span>
              <span className="text-custom-gold text-[14px] ">
                Seamless releases
              </span>

              <div className="rounded-full flex items-center justify-center absolute top-2  bg-[#001CA0] -right-8 h-[80%] w-[35%] text-xl border border-white">
                <PiPersonSimpleSwimFill />
              </div>
            </div>
            <div
              className="absolute bg-primary-deep w-[150px] flex flex-col rounded-xl p-2 lg:p-3 left-2 lg:left-20 -bottom-10 lg:bottom-25 dancingSlide"
              style={{ boxShadow: "6px 6px 10px #000000d6" }}
            >
              <span className="text-[16px] -mb-1">For Label</span>
              <span className="text-custom-gold text-[14px]">
                Easy distributions
              </span>

              <div className="rounded-full flex items-center justify-center absolute top-2  bg-[#001CA0] -right-10 h-[80%] w-[35%] text-xl border border-white">
                <BiLabel />
              </div>
            </div>
            <div
              className=" absolute bg-primary-light w-[170px] lg:w-[200px] flex flex-col rounded-lg p-2 lg:p-3 right-8 lg:right-28 -top-16 lg:top-38"
              style={{ boxShadow: "6px 6px 10px #000000d6" }}
            >
              <span className="text-[16px] -mb-1">For White Labels</span>
              <span className="text-custom-gold text-[14px]">
                (Distributions)
              </span>

              <div className="rounded-full flex items-center justify-center absolute top-2  bg-primary-deep -right-7 h-[80%] w-[30%] lg:w-[25%] text-xl border border-white">
                <GiMusicalNotes />
              </div>
            </div>
            <div
              className="hidden absolute bg-primary-light w-[150px] md:flex flex-col rounded-lg p-2 lg:p-3 right-8 lg:right-32 bottom-5 lg:bottom-40"
              style={{ boxShadow: "6px 6px 10px #000000d6" }}
            >
              <span className="text-[16px] -mb-1">For Videos</span>
              <span className="text-custom-gold text-[14px]">
                (Distributions)
              </span>

              <div className="rounded-full flex items-center justify-center absolute top-2  bg-primary-deep -right-7 h-[80%] w-[35%] text-xl border border-white">
                <CiVideoOn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full bg-white py-5 px-10">
        <marquee>
          <div className="w-full grid grid-cols-12 gap-5 py-2">
            {supportedStores?.slice(0, 12)?.map((item, i) => (
              <div
                className="col-span-1 h-[60px] flex justify-center items-center "
                key={i}
                style={{ boxShadow: "2px 2px 8px #00000057" }}
              >
                <img
                  src={`/images/music-stores/${item}`}
                  alt=""
                  className="h-7"
                />
              </div>
            ))}
          </div>
        </marquee>
        <marquee behavior="alternate">
          <div className="w-full grid grid-cols-12 gap-5 py-2">
            {supportedStores?.slice(12, 24)?.map((item, i) => (
              <div
                className="col-span-1 h-[60px] flex justify-center items-center "
                key={i}
                style={{ boxShadow: "2px 2px 9px #00000057" }}
              >
                <img
                  src={`/images/music-stores/${item}`}
                  alt=""
                  className="h-7"
                />
              </div>
            ))}
          </div>
        </marquee>
        <marquee behavior="alternate" direction="right">
          <div className="w-full grid grid-cols-12 gap-5 py-2">
            {supportedStores?.slice(24, 36)?.map((item, i) => (
              <div
                className="col-span-1 h-[60px] flex justify-center items-center "
                key={i}
                style={{ boxShadow: "2px 2px 9px #00000057" }}
              >
                <img
                  src={`/images/music-stores/${item}`}
                  alt=""
                  className="h-7"
                />
              </div>
            ))}
          </div>
        </marquee>
      </div>
      <div className="md:hidden w-full bg-white py-10 px-5">
        <div className="w-full grid grid-cols-6 md:grid-cols-6 grid-flow-dense gap-3 py-1">
          {supportedStores?.slice(0, 36)?.map((item, i) => (
            <div
              className="col-span-1 h-[50px] flex justify-center items-center"
              key={i}
              style={{ boxShadow: "2px 2px 8px #00000027" }}
            >
              <img
                src={`/images/music-stores/${item}`}
                alt=""
                className="h-6"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateMusicSection;
