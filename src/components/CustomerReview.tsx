
"use client";

import { Carousel } from "flowbite-react";
import { Avatar } from "flowbite-react";


export default function CustomerReview() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center dark:text-white">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>Jane Doe</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Good Place for Review</div>
      </div>
    </Avatar>
        </div>
        <div className="flex h-full items-center justify-center dark:text-white">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>John Doe</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Good Place for PostNatal Care</div>
      </div>
    </Avatar>
        </div>
        <div className="flex h-full items-center justify-center dark:text-white">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded>
      <div className="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
      </div>
    </Avatar>
        </div>
      </Carousel>
    </div>
  );
}
