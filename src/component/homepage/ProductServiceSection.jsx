import React from "react";
import { Link } from "react-router-dom";
import { productServiceImage } from "../../data/homePage";

const ProductServiceSection = () => {
  return (
    <div className="w-full flex text-white">
      <div className="w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-bold border-l border-r border-gray-700">
        PRODUCTS & SERVICES
      </div>
      <div className="w-[85%] pt-20 lg:pt-60 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[20%] px-4">
          <img
            src="/images/burnaboy.jpg"
            alt=""
            className="h-[350px] lg:h-full w-full object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-[65%] grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="px-2 flex flex-col gap-4">
            <h1 className="text-[20px] mt-4 lg:mt-0 lg:text-3xl font-bold">
              WHAT WE DO
            </h1>
            <span className="text-[16px] lg:text-lg">
              We provide best-in-class technology for our artists and labels,
              helping them succeed in the changing digital landscape. Our suite
              of tools and services covers distribution, publishing, sync
              licensing, digital rights management, A&R and marketing, and
              recording services.
            </span>

            {/* mobile view */}
            <Link
              to="/"
              className="lg:hidden lg:w-[15%] flex lg:items-center lg:mx-auto text-[#e33874] font-semibold opacity-90 hover:opacity-100"
            >
              <span className="read-more-link text-[20px] text-[#e33874] font-semibold opacity-90 hover:opacity-100">
                OUR SERVICES
              </span>
            </Link>
          </div>
          <div className="w-full lg:hidden lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center-safe lg:gap-0">
            {productServiceImage.map((item, index) => (
              <div key={index} className="px-3">
                {item?.title ? (
                  <div className="flex items-center justify-items-center flex-col">
                    <img
                      src={`/images/${item.image}`}
                      alt={item?.alt || "product-service"}
                      className="h-[70px] w-[70px] object-cover rounded-lg shadow-lg m-2"
                    />
                    <h3 className="text-sm font-semibold text-center">
                      {item.title}
                    </h3>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="px-2 flex flex-col gap-4">
            <h1 className="text-[20px] lg:mt-0 lg:text-3xl font-bold">
              INNOVATION MEETS MUSIC
            </h1>
            <span className="text-[16px] lg:text-lg">
              We maximize opportunities to monetize content across all
              platforms, provide access to proprietary technology that allows
              you to track earnings in real-time — all without compromising
              ownership or creativity.
            </span>
            <div className="w-full lg:hidden lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 items-center justify-items-center-safe lg:gap-0">
              {productServiceImage.map((item, index) => (
                <div key={index} className="px-3">
                  {!item?.title && (
                    <div className="flex items-center justify-items-center flex-col">
                      <img
                        src={`/images/${item.image}`}
                        alt={item?.alt || "product-service"}
                        className="h-full w-full object-cover rounded-lg shadow-lg m-2"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden w-full lg:col-span-2 lg:grid grid-cols-2 lg:grid-cols-4 gap-y-15 items-center justify-items-center-safe">
            {productServiceImage.map((item, index) => (
              <div key={index} className="px-2">
                {item?.title ? (
                  <div className="flex items-center flex-col">
                    <img
                      src={`/images/${item.image}`}
                      alt={item?.alt || "product-service"}
                      className="h-[80px] w-[80px] object-cover rounded-lg shadow-lg m-2"
                    />
                    <h3 className="text-sm font-semibold m-2">{item.title}</h3>
                  </div>
                ) : (
                  <img
                    src={`/images/${item.image}`}
                    alt={item?.alt || "product-service"}
                    className="h-[80px]] object-cover rounded-lg shadow-lg m-2 grayscale-0 hover:grayscale-0 transition-all duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/"
          className="hidden lg:w-[15%] lg:flex lg:items-center lg:mx-auto text-[#e33874] font-semibold opacity-90 hover:opacity-100"
        >
          <span className="read-more-link text-[20px] text-[#e33874] font-semibold opacity-90 hover:opacity-100">
            OUR SERVICES
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductServiceSection;
