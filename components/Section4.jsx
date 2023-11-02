import React from "react";
import Image from "next/image";
import stat from "@public/contact-min.jpg";

const Section4 = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Impressive Stats
            </h1>
            <div className="h-1 w-20 bg-primary rounded mb-4"></div>
            <div class="leading-relaxed">
              We take immense pride in our accomplishments and the statistics
              that showcase our dedication to excellence:
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium md:text-3xl text-2xl text-gray-900">
              500+
            </h2>
            <p class="leading-relaxed">Projects Completed</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium md:text-3xl text-2xl text-gray-900">
              1.98%
            </h2>
            <p class="leading-relaxed">Client Satisfaction</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium md:text-3xl text-2xl text-gray-900">
              15+
            </h2>
            <p class="leading-relaxed">Years of Experience</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium md:text-3xl text-2xl text-gray-900">
              24/7
            </h2>
            <p class="leading-relaxed">Customer Support</p>
          </div>
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            class="object-cover object-center w-full h-full"
            src={stat}
            alt="stats"
          />
        </div>
      </div>

      <section className="container px-1 mx-auto bg-primary h-[32vh]  md:h-[40vh] lg:h-auto md:pb-12 text-center">
        <h3 className="mt-0 pt-14 font-medium text-xl md:text-3xl text-white">
          An innovative Company working with the latest technologies
        </h3>
        <button className="bg-transparent p-2 md:py-4 md:px-7 px-5 border-2 border-white text-white text-lg md:text-base mt-5 hover:bg-white hover:text-primary transition duration-500">
          Contact Us
        </button>
      </section>
    </section>
  );
};

export default Section4;
