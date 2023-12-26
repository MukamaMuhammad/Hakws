import React from "react";
import Link from "next/link";

const Section2 = () => {
  return (
    <section id="section2" class="text-gray-600 body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            What Sets Us Apart?
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            We don't just build structures; we craft legacies. Our unwavering
            commitment to excellence and our relentless pursuit of innovation
            distinguish us as a premier property and construction company in
            Uganda. Here's what truly sets us apart from the rest:
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                EXPERTISE
              </h2>
              <p class="leading-relaxed text-base">
                Our seasoned team of architects, engineers, and builders is at
                the forefront of industry trends and cutting-edge technology.
              </p>
              <Link
                href={"/about"}
                class="mt-3 text-primary inline-flex items-center cursor-pointer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                QUALITY
              </h2>
              <p class="leading-relaxed text-base">
                We are committed to the highest standards of craftsmanship,
                using only the finest materials to create properties that stand
                the test of time.
              </p>
              <Link
                href={"/about"}
                class="mt-3 text-primary inline-flex items-center cursor-pointer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                CUSTOMER-CENTRIC
              </h2>
              <p class="leading-relaxed text-base">
                Your vision is our mission. We listen closely to your needs and
                desires, ensuring that your dreams are brought to life in every
                project we undertake.
              </p>
              <Link
                href={"/about"}
                class="mt-3 text-primary inline-flex items-center cursor-pointer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Link href={"/portfolio"}>
          <button class="flex mx-auto mt-16 text-white bg-primary transition hover:bg-primary2 border-0 py-2 px-8 focus:outline-none rounded text-lg">
            Our Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Section2;
