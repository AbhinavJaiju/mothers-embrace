import { Carousel } from "flowbite-react";
import Baby1 from "../assets/pregnantmom.jpg";
// import Baby2 from "../assets/baby2.jpg";
import Baby3 from "../assets/pregnantlady.jpg";

export default function HeroBanner() {
  return (
    <div className="h-90 sm:h-90 xl:h-120 2xl:h-150">
     <Carousel>
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={Baby1} alt="Baby1" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-0 w-full text-center text-white py-2">
          <div className="absolute inset-0 mx-4 my-auto flex h-64 flex-col items-center justify-center rounded-lg text-red-500 sm:text-gray-500 bg-white/50 px-4 pb-6 text-center sm:mx-6 sm:my-4 sm:h-full sm:bg-transparent">
            <h2 className="text-4xl font-bold">Nurturing Life from the Start!</h2>
            <span>Regular check-ups, proper nutrition, and guided exercises ensure a healthy pregnancy for both mother and baby</span>
            </div>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={Baby3} alt="Baby3" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-0 w-full text-center text-white py-2">
          <div className="absolute inset-0 mx-4 my-auto flex h-64 flex-col items-center justify-center text-yellow-300 sm:text-gray-100 rounded-lg bg-white/50 px-4 pb-6 text-center sm:mx-6 sm:my-4 sm:h-full sm:bg-transparent">
          <h2 className="text-4xl font-bold">A Smooth Journey into Motherhood!</h2>
          <span>Postpartum recovery, lactation support, and mental well-being assistance help mothers regain strength and confidence.</span>
          </div>  
          </div>
        </div>
      </Carousel>
    </div>
  );
}
