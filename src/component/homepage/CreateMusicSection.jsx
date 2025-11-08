import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createMusicSectionData, image } from "../../data/homePage";

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
    <div className="w-full mt-20 text-[#ffffff] flex">
      <h1 className="font-Syne w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-extrabold border-l border-r border-gray-700">
        WE ARE CREATE MUSIC
      </h1>
      <div className="w-[85%] lg:w-[92%] flex flex-col lg:flex-row">
        {/* Slider Section */}
        <div className="lg:w-[50%] mx-2 lg:px-0 mt-5 flex flex-col lg:flex-row relative">
          <div className="w-[100%] flex flex-col gap-3 px-2">
            <h2 className="mt-4 lg:mt-0 text-2xl lg:text-5xl lg:leading-13 font-bold mb-2">
              {createMusicSectionData[current]?.title}
            </h2>
            <p className="text-sm mb-4">
              {createMusicSectionData[current]?.description}
            </p>
            

            <img
              src={`/images/${image[current]}`}
              alt={createMusicSectionData[current]?.title || "slider"}
              className="w-full object-cover rounded-lg shadow-lg"
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

            <div className="mt-10">
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
            </div>
          </div>
        </div>

        {/* right side: original static content restored */}
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-5 pt-5 px-2 lg:pl-2">
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-full">
            <div className="flex flex-col lg:w-[55%] gap-4 lg:gap-3 px-2">
              <h3 className="font-semibold text-[20px] lg:text-[24px]">
                CREATE SIGNS SUBLIME
              </h3>
              <span className="text-[16px] leading-7">
                Sublime has officially signed with Create Music Group, a move
                spearheaded by Create’s Senior VP of Music, Operations and
                Marketing — Chris Herche, marking a new chapter in Sublime’s
                legacy. The band made a powerful return with the release of
                their first entirely original single, “Ensenada,” which debuted
                on July 18, 2025. The track blends the band's iconic ska sound
                with reggae and punk and is accompanied by a music video.
                Fronted by Jakob Nowell, the son of the late Bradley Nowell, and
                backed by original members Bud Gaugh and Eric Wilson, the band
                recently performed at Vans Warped Tour in Long Beach and hosted
                a multi‑night Las Vegas takeover event titled “Fear, Loathing,
                and Sublime in Las Vegas.” Sublime’s upcoming appearances
                include Sea.Hear.Now Music Festival and The Today Show both
                happening in September 2025.
              </span>
            </div>
            <Link
              to="/"
              className="flex lg:items-center lg:mx-auto text-[#008ad3] font-semibold opacity-90 hover:opacity-100"
            >
              <span className="read-more-link text-[20px] text-[#008ad3] font-semibold opacity-90 hover:opacity-100">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMusicSection;
