import React from "react";
import Image from "next/image";
import service1 from "@public/service1.jpg";
import service2 from "@public/service2.jpg";
import service3 from "@public/service3.jpg";
import service4 from "@public/portfolio3.png";
import service5 from "@public/service5.jpg";
import service6 from "@public/service6.png";

export const metadata = {
  title:
    "Our Services at Hakw Properties And Construction Uganda Ltd | Construction and Property Services in Uganda",
  description:
    "Hakw Properties And Construction Uganda Ltd offers a wide range of construction and property services in Uganda and Kampala. Our services include construction services, electrical services, plumbing services, interior design services, ac installation and other services related to construction and properties.",
};

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-32 mx-auto">
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
        <div className="flex flex-wrap -m-4">
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
                ELECTRICAL SERVICES
              </h2>
              <p className="leading-relaxed text-base">
                Safeguarding your home and businesses with skilled electrical
                solutions, ensuring safety and efficiency.
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
                Keeping water flowing seamlessly, with reliable plumbing
                solutions for homes and businesses.
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
                INTERIOR DESIGN
              </h2>
              <p className="leading-relaxed text-base">
                Elevating spaces with creative design, turning your vision into
                captivating, functional environments.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={service5}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                PROJECT MANAGEMENT
              </h2>
              <p className="leading-relaxed text-base">
                Your project's success is our mission—comprehensive planning,
                oversight, and quality control.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={service6}
                alt="content"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                AC INSTALLATION
              </h2>
              <p className="leading-relaxed text-base">
                Ensuring year-round comfort with expert, efficient AC
                installations for homes and offices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
