
import { Carousel } from "flowbite-react";
import reviewData from "./reviewData";

export default function CustomerReview() {
  return (
    <div className="h-64 my-6 sm:h-64 xl:h-64 2xl:h-64 py-4 sm:py-4 xl:py-6 2xl:py-8">
      <h2 className="text-2xl font-semibold text-center dark:text-white">Customer Reviews</h2>
      <Carousel
        indicators={false}
        data-carousel-hide-controls="true"
        pauseOnHover
      >
        {reviewData.map((review) => (
          <div
            className="mb-10 flex h-full items-center justify-center p-6 dark:text-white"
            key={review.id}
          >
            {/* <Avatar img="/images/people/profile-picture-5.jpg" rounded> */}
            <div className="space-y-1 font-medium dark:text-white">
              <div>{review.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {review.review}
              </div>
            </div>
            {/* </Avatar> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
