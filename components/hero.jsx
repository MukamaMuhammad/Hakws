"use client";
import React from "react";
import Image from "next/image";
import bg1 from "@public/bg1.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-24">
      <div className="container mx-auto flex px-5 pt-24 md:pb-24 pb-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Your Trusted Partner in <br className="hidden lg:inline-block" />
            Property and Construction
          </h1>
          <p className="mb-8 leading-relaxed">
            At Hakw, we elevate dreams into reality. With decades of excellence,
            we're your trusted name in Uganda's property and construction. Soar
            with us for innovation, quality, and customer satisfaction.
          </p>
          <div className="flex justify-center">
            <a
              href="#section2"
              className="inline-flex text-white bg-primary hover:bg-primary2 border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Read More
            </a>
            <Link href={"/contact"}>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-[40rem] lg:w-full md:w-1/2 w-[100%] ">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={bg1}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
