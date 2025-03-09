import { Carousel } from "flowbite-react";
import Baby1 from "../assets/Baby1.jpg";
// import Baby2 from "../assets/baby2.jpg";
import Baby3 from "../assets/baby3.jpg";

export default function HeroBanner() {
  return (
    <div className="h-90 sm:h-90 xl:h-120 2xl:h-150">
     <Carousel>
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={Baby1} alt="Baby1" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-0 w-full text-center text-white py-2">
            Slide 1
          </div>
        </div>
        {/* <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={Baby2} alt="Baby2" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-0 w-full text-center py-2 text-white">
            Slide 2
          </div>
        </div> */}
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={Baby3} alt="Baby3" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-0 w-full text-center text-white py-2">
            Slide 3
          </div>
        </div>
      </Carousel>
    </div>
  );
}
