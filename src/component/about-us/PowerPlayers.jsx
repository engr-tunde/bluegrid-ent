import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { aboutUsSliderImages } from "../../data/aboutUsData";

const PowerPlayers = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = aboutUsSliderImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full py-20 lg:py-60">
      <h1 className="font-bold text-[26px] lg:text-5xl mb-8">WHAT OTHERS HAVE TO SAY</h1>

      <div className="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-8">
        <div className="flex flex-col gap-3 px-4">
          <img src="/public/images/kidjo.jpg" alt="" />
          <Link to="/" className="uppercase font-bold hover:text-[#e33874]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Link>
          <span className="font-bold">SEP 16,2025</span>
        </div>
        <div className="flex flex-col gap-3 px-4">
          <img src="/public/images/akon.jpg" alt="" />
          <Link to="/" className="uppercase font-bold  hover:text-[#e33874]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Link>
          <span className="font-bold">SEP 16,2025</span>
        </div>
        <div className="flex flex-col gap-3 px-4">
          <img src="/public/images/fela.jpg" alt="" />
          <Link to="/" className="uppercase font-bold  hover:text-[#e33874]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Link>
          <span className="font-bold">SEP 16,2025</span>
        </div>
      </div>

      <div className="lg:hidden w-[100%] flex flex-col gap-7 mb-8 shadow-2xl bg-[#1c1c1c]">
        <div className="p-4 flex flex-col gap-4">
          <div className="w-full h-[300px]">
            <img
              src={`/images/${aboutUsSliderImages[current].image}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Link
              to="/"
              className="uppercase font-bold text-lg hover:text-[#e33874]"
            >
              {aboutUsSliderImages[current].title}
            </Link>
            <div className="font-bold mt-2">
              {aboutUsSliderImages[current].date}
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            {aboutUsSliderImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-4 h-4 rounded-full border-[2px] border-gray-400 ${
                  current === idx ? "bg-[#e33874]" : ""
                } transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e33874]`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPlayers;
