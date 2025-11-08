import React from "react";

const Resources = () => {
  return (
    <div
      className="w-full flex mt-20 pl-0 lg:pl-20"
      style={{
        background: "linear-gradient(to bottom, #1F1500 0%, #1F1629 100%)",
      }}
    >
      <div className="w-[15%] lg:w-[8%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-extrabold border-l border-r border-gray-700">
        OUR SERVICES
      </div>

      <div className="w-[85%] flex flex-col lg:flex-row lg:w-[100%] p-5">
        <div className="flex flex-col gap-6 w-[100%] lg:w-[50%] mb-5 lg:mb-0">
          <span className="text-4xl lg:text-7xl font-bold ">
            RESOURCES OF A MAJOR LABEL, FLEXIBILITY OF BEING INDEPENDENT.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime, molestias praesentium itaque harum placeat a delectus atque
            eos sit unde officia fugit, minima officiis! Esse non vel
            perferendis laudantium!
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Resources;
