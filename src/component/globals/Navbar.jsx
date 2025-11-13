import { BiMenuAltLeft } from "react-icons/bi";
import { navbarData } from "../../data/navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    // setOpen((prevState) => !prevState);
    setOpen(!open);
  };

  return (
    <div className="w-screen fixed z-50 bg-primary-deep py-3 px-2 lg:px-10 flex justify-between items-center shadow-lg shadow-black/35">
      <div className="flex items-center w-full justify-between lg:w-[10%]">
        <Link to="/" className="w-[50px] h-[50px]">
          <img src="/public/images/logo-white.png" alt="" className="w-full" />
        </Link>
        <div className="cursor-pointer transform transition-all duration-300 ease-in-out">
          {open ? (
            <RiCloseLine
              className="text-white text-4xl transition-transform duration-700 ease-in-out hover:rotate-90"
              onClick={handleOpenClose}
            />
          ) : (
            <BiMenuAltLeft
              className="text-white text-4xl transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={handleOpenClose}
            />
          )}
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        <h3 className="text-white text-[18px] hover:text-[#008ad3] transition ease-in-out duration-500">
          WORK WITH US
        </h3>
        <Link className="bg-[#008ad3] hover:bg-[#005fd3] hover:text-white px-8 py-2 hover:border-white transition ease-in-out duration-500 rounded-full mr-4">
          Client Login
        </Link>
      </div>

      {open ? (
        <div className="absolute w-screen h-screen overflow-y-scroll lg:overflow-hidden left-0 top-[80px] bg-[#0e0803ef]">
          <div className="lg:w-[80%] grid pt-10 lg:ml-[100px] lg:grid-cols-3 gap-10 lg:gap-15">
            {navbarData?.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="flex flex-col items-center lg:items-start gap-6"
              >
                <div className="font-bold text-[#7f8f8f] mb-2 text-5xl hover:text-white">
                  {section?.title}
                </div>
                {section?.Children?.map((item, itemIndex) => (
                  <Link
                    to={item?.url}
                    key={itemIndex}
                    className="text-white font-bold hover:shadow-gray-50 shadow-lg hover:text-[#e33874] transition ease-in-out duration-500"
                    onClick={handleOpenClose}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
