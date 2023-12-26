import React from "react";
import Image from "next/image";
import stat from "@public/contact-min.jpg";
import stats from "@public/stats2.jpg";
import Link from "next/link";

const Section4 = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto flex flex-wrap">
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
              98%
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
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 ">
          <Image
            class="object-cover object-center w-full h-full"
            src={stats}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
