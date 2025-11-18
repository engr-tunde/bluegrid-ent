import React from "react";
import AppHoverUnderlineFunc from "../globals/AppHoverUnderlineFunc";
import { Link } from "react-router-dom";

const NewsArticleSection = () => {
  return (
    <div className="w-full flex text-white pb-20">
      <div className="w-[15%] lg:w-[8%] border-l border-r border-gray-700"></div>
      <div className="lg:w-[6%] hidden lg:flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-extrabold">
        NEWS & ARTICLES
      </div>
      <div className="flex flex-col lg:flex-row w-[86%]">
        <div className="w-full lg:w-[75%] pt-20 lg:pt-60 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-5 px-4">
          <div className="col-span-2">
            <img
              // src="/images/burnaboy-3.webp"
              src="/images/burna-2.webp"
              alt=""
              className="shadow-md shadow-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <Link
              to="/"
              className="font-bold text-lg lg:text-3xl hover:text-[#008ad3]"
            >
              Burnaboy becomes Face of Africa Music - Apple Music's Africa Now
              2025
            </Link>
            <span>November 18, 2025</span>
          </div>
          <div className="flex flex-col col-span-2 lg:ml-30">
            <Link to="/" className="font-bold text-lg hover:text-[#008ad3] ">
              All you need to know about the new ticketing laws as as Taylor
              Swift announces tour
            </Link>
            <span className="">November 18, 2025</span>
          </div>
          <div className="flex flex-col col-span-1">
            <Link to="/" className="font-bold text-lg hover:text-[#008ad3]">
              BBC Radio 1's Big Weekend 2026 heads for Sunderland
            </Link>
            <span>November 18, 2025</span>
          </div>
        </div>
        {/* <div className="w-full lg:w-[25%] flex items-end pl-4 lg:pl-0 mt-4 lg:mt-0">
          <Link
            to="/"
            className="read-more-link text-[20px] text-[#008ad3] font-semibold opacity-90 hover:opacity-100 mb-20"
          >
            MORE ARTICLES
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default NewsArticleSection;
