import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createMusicSectionData, image } from "../../data/homePage";
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
    // <div className="bg-primary-light w-full mt-20 lg:mt-16 text-[#ffffff] flex">
    <div
      className="bg-primary-light w-full mt-14 lg:mt-16 text-[#ffffff] flex pb-20"
      style={{
        backgroundImage:
          "radial-gradient(#001CA0 10%, #00167a 15%, #000b43 70%)",
      }}
    >
      <h1 className="font-Syne w-[15%] lg:w-[8%] flex items-center uppercase justify-center [writing-mode:vertical-lr] transform rotate-180 text-3xl tracking-wider font-extrabold border-l border-r border-gray-700">
        BLUEGRID ENTERTAINMENT
      </h1>
      <div className="w-[85%] lg:w-[92%] flex flex-col lg:flex-row lg:pt-20">
        {/* Slider Section */}
        <div className="lg:w-[40%] mx-2 lg:px-0 mt-5 flex flex-col lg:flex-row relative">
          <div className="w-[100%] flex flex-col gap-3 px-2">
            <h2 className="mt-4 lg:mt-0 text-2xl lg:text-4xl lg:leading-13 font-bold mb-2 uppercase">
              {createMusicSectionData[current]?.title}
            </h2>
            <p className="text-sm mb-4">
              {/* {createMusicSectionData[current]?.description} */}
              Earn incredibly as music lovers around the globe listen to your
              body of work from any where, any time
            </p>

            <img
              src={`/images/${image[current]}`}
              alt={createMusicSectionData[current]?.title || "slider"}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
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

            {/* <div className="mt-10">
              {createMusicSectionData[current]?.Children?.map(
                (child, childIndex) => (
                  <Link
                    key={childIndex}
                    to={child.url}
                    className="text-[#008ad3] read-more-link"
                  >
                    {child?.content}
                  </Link>
                )
              )}
            </div> */}
          </div>
        </div>

        {/* right side: original static content restored */}
        <div className="w-[100%] lg:w-[60%] flex flex-col gap-5 pt-5 lg:pl-2 relative">
          <div className="lg:w-[500px] lg:h-[500px] m-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-full"
              src="/videos/bluegrid-vid-5.mp4"
            ></video>
          </div>

          <div className="hidden absolute bg-primary-deep w-[150px] lg:flex flex-col rounded-lg p-3 left-20 top-35">
            <span className="text-[16px]">For Artist</span>
            <span className="text-secondary-brand text-[14px]">(Distributions)</span>

            <div className="rounded-full flex items-center justify-center absolute top-0  bg-primary-light -right-7 h-full w-[40%] text-xl"><PiPersonSimpleSwimFill /></div>
          </div>
          <div className="hidden absolute bg-primary-deep w-[150px] lg:flex flex-col rounded-lg p-3 left-20 bottom-25">
            <span className="text-[16px]">For Label</span>
            <span className="text-secondary-brand text-[14px]">(Distributions)</span>

            <div className="rounded-full flex items-center justify-center absolute top-0  bg-primary-light -right-7 h-full w-[40%] text-xl"><BiLabel /></div>
          </div>
           <div className="hidden absolute bg-primary-light w-[200px] lg:flex flex-col rounded-lg p-3 right-20 top-25">
            <span className="text-[16px]">For White Labels</span>
            <span className="text-secondary-brand text-[14px]">(Distributions)</span>

            <div className="rounded-full flex items-center justify-center absolute top-0  bg-primary-deep -right-7 h-full w-[40%] text-xl"><GiMusicalNotes /></div>
          </div>
           <div className="hidden absolute bg-primary-light w-[150px] lg:flex flex-col rounded-lg p-3 right-20 bottom-35">
            <span className="text-[16px]">For Videos</span>
            <span className="text-secondary-brand text-[14px]">(Distributions)</span>

            <div className="rounded-full flex items-center justify-center absolute top-0  bg-primary-deep -right-7 h-full w-[40%] text-xl"><CiVideoOn /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMusicSection;
