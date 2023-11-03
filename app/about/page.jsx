import React from "react";
import Image from "next/image";
import hero from "@public/01.jpg";
import banner from "@public/banner.jpg";

const page = () => {
  return (
    <>
      <section class="text-gray-600 body-font mt-10">
        <div class="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0 text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-start">
              Bringing Your Ideas and <br class="hidden lg:inline-block" />
              Innovations to Life
            </h1>
            <p class="mb-8 leading-relaxed text-start">
              Our professional team is committed to providing sustainable,
              creative & efficient engineering solutions for our communities
            </p>
            <ul className="list-disc list-inside mb-8 text-start">
              <li>Making lives easier</li>
              <li>Get every solution right here</li>
              <li>Innovation and creativity</li>
              <li>Fine engineering only with us</li>
            </ul>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Consult Now
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-[100%]">
            <Image
              class="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-16">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Mission
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our mission is simple but profound: to shape the future by
              building exceptional spaces. We are more than constructors; we are
              creators, driven by a deep commitment to quality, innovation, and
              complete client satisfaction. With Hawks, you're not just a
              client; you're a partner in our journey to excellence.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Our Story
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Our story evolves from humble beginnings to becoming a renowned
                name in the construction industry, defined by excellence.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Our Team
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Our team includes dedicated experts who drive our vision,
                expertise, and unwavering commitment to every project we
                undertake.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Core Values
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Excellence, innovation, and quality are the cornerstones of our
                approach, guiding each endeavor to deliver outstanding results.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Sustainability
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Committed to eco-friendly practices and sustainable
                construction, we pave the way for a greener, more sustainable
                future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
