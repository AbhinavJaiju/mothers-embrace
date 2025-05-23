import BabyDesktop from "../assets/pregnant.jpg";
import BabyMobile from "../assets/woman.jpg";
import { useState, useEffect } from "react";

const MainBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
      <img
        src={isMobile ? BabyMobile : BabyDesktop}
        alt="Baby"
        className="h-88 w-full object-cover blur-sm filter sm:h-90 md:h-90 lg:h-90 xl:h-90"
      />
      <div className="absolute inset-0 mx-2 my-2 flex h-full flex-col items-center justify-end bg-transparent pb-8 text-center sm:mx-6 sm:my-4 sm:h-full sm:bg-transparent">
        <span className=" text-5xl font-bold text-pink-500 sm:text-8xl sm:text-gray-400">
          Mother's Embrace
        </span>
        <span className="mt-2 py-3 text-3xl text-pink-500 sm:py-4 sm:text-6xl sm:text-red-400">
          Kerala Ayurveda
        </span>
        <span className=" py-2 text-xl text-pink-500 sm:py-4 sm:text-6xl sm:text-gray-400">
          Phonenumber : +916362080204
        </span>
        <div className="mt-6 flex gap-4">
          <button className="rounded-lg border border-red-500 bg-red-500 px-6 py-2 text-white transition duration-300 hover:border-white hover:bg-white hover:text-red-600">
            <a href="#services"> Services </a>
          </button>
          <button className="rounded-lg border border-red-500 px-6 py-2 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white">
            <a href="#contact"> Contact Us </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
