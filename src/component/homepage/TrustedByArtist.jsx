import { useEffect, useState } from "react";
import {
  totalTrustedArtistImage,
  trustedByArtistImage,
  trustedByArtistImageThree,
  trustedByArtistImageTwo,
} from "../../data/homePage";

const TrustedByArtist = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = totalTrustedArtistImage.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full flex text-white">
      <div className="w-[15%] lg:w-[8%] border-l border-r border-gray-700 mr-3 lg:mr-0"></div>
      <div className="hidden lg:flex w-[92%] pt-60">
        <div className="w-[20%] flex flex-col gap-3 px-2">
          {trustedByArtistImage.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className={`w-full ${
                imgIndex === 1 ? "h-[400px]" : "h-[330px]"
              } relative group overflow-hidden`}
            >
              <img
                src={`/images/${img}`}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 bottom-0 w-full bg-[#88ade17a] h-12 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                LEFT
              </div>
            </div>
          ))}
        </div>
        <div className="w-[30%] flex">
          <div className="w-[20%] flex items-center justify-center [writing-mode:vertical-lr] transform rotate-180 text-2xl tracking-wider font-extrabold">
            TRUSTED BY ARTISTS
          </div>
          <div className="w-[80%] flex flex-col gap-6 px-2">
            {trustedByArtistImageTwo.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="w-full h-[380px] relative group overflow-hidden"
              >
                <img
                  src={`/images/${img}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 bottom-0 w-full bg-[#c4393965] h-12 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  MIDDLE
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-2 px-2">
          {trustedByArtistImageThree.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="w-full h-[370px] relative group overflow-hidden"
            >
              <img
                src={`/images/${img}`}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 bottom-0 w-full bg-[#c4393965] h-12 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                MIDDLE
              </div>
            </div>
          ))}
        </div>
        <div className="w-[20%] flex flex-col gap-3 px-2">
          {trustedByArtistImage.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className={`w-full ${
                imgIndex === 1 ? "h-[400px]" : "h-[330px]"
              } relative group overflow-hidden`}
            >
              <img
                src={`/images/${img}`}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 bottom-0 w-full bg-[#88ade17a] h-12 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                RIGHT
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden w-[85%] flex flex-col gap-7 mb-8 shadow-2xl bg-[#1c1c1c]">
        <div className="p-4 flex flex-col gap-4">
          <div className="w-full h-[300px] relative overflow-hidden">
            <img
              src={`/images/${totalTrustedArtistImage[current]}`}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute left-0 bottom-0 w-full bg-[#88ade17a] h-12 opacity-100 flex items-center justify-center">
              LEFT
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            {totalTrustedArtistImage.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-4 h-4 rounded-full border-[2px] border-gray-400 ${
                  current === idx ? "bg-[#008ad3]" : ""
                } transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008ad3]`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByArtist;
