import React from "react";
import { footerData, footerSocialLinks } from "../../data/footerData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen text-white border-t-[1px] border-gray-700">
      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-10 my-2 lg:mx-20 lg:my-10">
        {/* <h1 className="font-medium text-2xl">Bluegrid Entertainment</h1> */}

        <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="grid mx-auto lg:mx-0 lg:col-span-3 lg:grid  lg:grid-cols-4 gap-10 lg:gap-15">
            {footerData?.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="flex flex-col items-center lg:items-start gap-2"
              >
                <div className="font-medium mb-2 text-[14px]">
                  {section?.title}
                </div>
                {section?.Children?.map((item, itemIndex) => (
                  <Link
                    to={item?.url}
                    key={itemIndex}
                    className="text-[#7f8f8f] hover:text-[#e33874] transition ease-in-out duration-500"
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-15 col-span-1">
            <div className="hidden lg:flex font-medium lg:mb-2 text-[14px]">
              FOLLOW US
            </div>
            <div className="flex gap-3">
              {footerSocialLinks?.map((social, socialIndex) => (
                <Link to={social?.url} key={socialIndex}>
                  <img
                    src={`/icons/${social?.img}`}
                    alt=""
                    className="h-[35px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col mt-3 gap-1 text-[#7f8f8f]">
          <div className="flex gap-3 text-sm">
            <Link to="/disclaimer" className="hover:text-[#e33874]">
              Disclaimer
            </Link>
            <Link to="/privacy-policy" className="hover:text-[#e33874]">
              Privacy Policy
            </Link>
          </div>
          <span className="text-sm">
            Copyright © 2025 Bluegrid Entertainment, All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
