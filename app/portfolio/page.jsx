import React from "react";
import Image from "next/image";
import banner from "@public/banner.jpg";

const page = () => {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <div className="lg:w-1/3 lg:mb-0 mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  lg:mb-2 mb-2">
              Our Portfolio
            </h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>

          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Take a glimpse at our successful projects that have added value to
            the lives of countless individuals and businesses. From modern homes
            to state-of-the-art commercial spaces, our portfolio speaks volumes
            about our commitment to excellence.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={banner}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={banner}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={banner}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={banner}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={banner}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={banner}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
