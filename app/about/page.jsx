import React from "react";
import Image from "next/image";
import hero from "@public/01.jpg";

const page = () => {
  return (
    <section class="text-gray-600 body-font mt-10">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0 text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-start">
            Bringing Your Ideas and
            <br class="hidden lg:inline-block" />
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
  );
};

export default page;
