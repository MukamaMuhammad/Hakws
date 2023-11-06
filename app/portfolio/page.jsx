"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Portfolio1 from "@public/portfolio1.jpg";
import Portfolio2 from "@public/portfolio2.jpg";
import Portfolio3 from "@public/portfolio3.png";
import Portfolio4 from "@public/portfolio4.jpg";
import Portfolio5 from "@public/portfolio5.jpg";
import Portfolio6 from "@public/portfolio6.jpg";
import Portfolio7 from "@public/portfolio7.jpg";
import Portfolio8 from "@public/portfolio8.jpg";
import Portfolio9 from "@public/portfolio9.jpg";
import Portfolio10 from "@public/portfolio10.jpg";
import Portfolio11 from "@public/portfolio11.jpg";
import Portfolio12 from "@public/portfolio12.jpg";

const page = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  const handleFullscreenClick = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container px-5 pt-24 pb-14 mx-auto flex flex-wrap">
        <div className="flex w-full mb-10 flex-wrap">
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
          <div className="flex flex-wrap w-1/2 max-md:w-[100%]">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio1)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded "
                src={Portfolio1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio2)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                onClick={() => handleImageClick(Portfolio3)}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded"
                src={Portfolio3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 max-md:w-[100%]">
            <div className="md:p-2 p-1 w-full">
              <Image
                onClick={() => handleImageClick(Portfolio4)}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded"
                src={Portfolio4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio5)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio6)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio6}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:-mx-2 -mx-1 mt-2">
          <div className="flex flex-wrap w-1/2 max-md:w-[100%]">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio9)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio9}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio8)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio8}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                onClick={() => handleImageClick(Portfolio7)}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded"
                src={Portfolio7}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 max-md:w-[100%]">
            <div className="md:p-2 p-1 w-full">
              <Image
                onClick={() => handleImageClick(Portfolio10)}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded"
                src={Portfolio10}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio11)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio11}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                onClick={() => handleImageClick(Portfolio12)}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded"
                src={Portfolio12}
              />
            </div>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
          onClick={handleFullscreenClick}
        >
          <Image
            src={fullscreenImage}
            alt="Fullscreen"
            className="md:w-[60%] w-[80%] md:h-[80%] mt-5"
          />
        </div>
      )}
    </section>
  );
};

export default page;
