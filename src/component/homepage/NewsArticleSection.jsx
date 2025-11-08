import React from "react";
import AppHoverUnderlineFunc from "../globals/AppHoverUnderlineFunc";
import { Link } from "react-router-dom";

const NewsArticleSection = () => {
  return (
    <div className="w-full flex text-white">
      <div className="w-[15%] lg:w-[8%] border-l border-r border-gray-700"></div>
      <div className="lg:w-[6%] hidden lg:flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-bold">
        NEWS & ARTICLES
      </div>
      <div className="flex flex-col lg:flex-row w-[86%]">
        <div className="w-full lg:w-[75%] pt-20 lg:pt-60 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-5 px-4">
          <div className="col-span-2">
            <img
              src="/public/images/fela.jpg"
              alt=""
              className="shadow-md shadow-white rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <Link
              to="/"
              className="font-bold text-lg lg:text-3xl hover:text-[#e33874]"
            >
              Indie Electronic Label Monstercat Acquired by Create Music Group
            </Link>
            <span>May 6, 2025</span>
          </div>
          <div className="flex flex-col col-span-2 lg:ml-30">
            <Link to="/" className="font-bold text-lg hover:text-[#e33874] ">
              JONATHAN STRAUSS: THE HITS INTERVIEW
            </Link>
            <span className="">Mar 7, 2025</span>
          </div>
          <div className="flex flex-col col-span-1">
            <Link to="/" className="font-bold text-lg hover:text-[#e33874]">
              DEADMAU5 CATALOG ACQUIRED BY CREATE MUSIC GROUP IN DEAL VALUED AT
              $55 MILLION
            </Link>
            <span>Mar 6, 2025</span>
          </div>
        </div>
        <div className="w-full lg:w-[25%] flex items-end pl-4 lg:pl-0 mt-4 lg:mt-0">
          <Link
            to="/"
            className="read-more-link text-[20px] text-[#e33874] font-semibold opacity-90 hover:opacity-100 mb-20"
          >
            MORE ARTICLES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleSection;
