import React from "react";
import Image from "next/image";
import Link from "next/link";
import service1 from "@public/service1.jpg";
import service2 from "@public/service2.jpg";
import service3 from "@public/service3.jpg";
import service4 from "@public/portfolio3.png";
import welding from "@public/welding.jpg";
import cctv from "@public/cctv.jpg";

const Section3 = () => {
  return (
    <section id="section3" className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our services
            </h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            We offer a comprehensive range of services designed to meet your
            property and construction needs with unmatched precision and
            dedication. Our team of experts is well-versed in a variety of
            services, ensuring that we can bring your vision to life, no matter
            the scale or complexity of the project. Our services include:
          </p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={service1}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                CONSTRUCTION
              </h2>
              <p className="leading-relaxed text-base">
                Building dreams into reality with expert craftsmanship,
                precision, and innovation at the core.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={service2}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                ELECTRICAL INSTALLATION
              </h2>
              <p className="leading-relaxed text-base">
                We provide expert electrical installation services to ensure
                safety and efficiency in residential and commercial properties.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={service3}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                PLUMBING
              </h2>
              <p className="leading-relaxed text-base">
                Our plumbing services cover everything from installations to
                repairs, ensuring that your plumbing systems function smoothly.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={cctv}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                CCTV INSTALLATION
              </h2>
              <p className="leading-relaxed text-base">
                Enhance the security of your property with our state-of-the-art
                CCTV installation services, providing peace of mind to property
                owners.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={service4}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                RENOVATIONS & MAINTENANCE
              </h2>
              <p className="leading-relaxed text-base">
                We offer comprehensive renovation & maintenance to revitalize
                your properties, ensuring they remain in top condition.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={welding}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                WELDING AND FABRICATION
              </h2>
              <p className="leading-relaxed text-base">
                We specialize in welding and fabrication, offering innovative
                solutions for various construction needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className=" px-1 bg-primary h-[32vh] w-[100vw]  md:h-[40vh] lg:h-auto md:pb-12 text-center rounded-lg">
        <h3 className="mt-0 pt-14 font-medium text-xl md:text-3xl text-white">
          An innovative Company working with the latest technologies
        </h3>
        <Link href={"/contact"}>
          <button className="bg-transparent p-2 md:py-4 md:px-7 px-5 border-2 border-white text-white text-lg md:text-base mt-5 hover:bg-white hover:text-primary transition duration-500">
            Contact Us
          </button>
        </Link>
      </section>
    </section>
  );
};

export default Section3;
