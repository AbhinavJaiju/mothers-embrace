import BabyDesktop from '../assets/pregnant.jpg';
import BabyMobile from '../assets/baby3.jpg';
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
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <img
        src={isMobile ? BabyMobile : BabyDesktop}
        alt="Baby"
        className="w-full h-90 sm:h-90 md:h-90 lg:h-90 xl:h-90 object-cover filter blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-2">
        <span className='text-gray-100 text-8xl font-bold'>Mother's Embrace</span><br/>
        <span className='text-red-500 text-6xl'>Kerala Ayurveda</span>
        <div className="mt-6 flex gap-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-white border hover:text-red-600 border-red-500 hover:border-white">
            Learn More
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg transition duration-300 hover:bg-red-500 hover:text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;