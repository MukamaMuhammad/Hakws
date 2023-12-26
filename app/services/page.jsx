import React from "react";
import Image from "next/image";
import service1 from "@public/service1.jpg";
import service2 from "@public/service2.jpg";
import service3 from "@public/service3.jpg";
import service4 from "@public/portfolio3.png";
import service5 from "@public/service5.jpg";
import service6 from "@public/service6.png";
import welding from "@public/welding.jpg";
import cctv from "@public/cctv.jpg";
import service7 from "@public/new-services.jpg";

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

        <div className="flex flex-wrap -m-4 mb-16">
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

        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Project Management
            </h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Hakw Properties and Construction UG Limited is your trusted partner
            for project management. We handle the overall planning,
            coordination, and control of projects from start to finish. Our
            project management services include:
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-16">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <Image
              className="h-auto rounded w-full object-cover object-center "
              src={service7}
              alt="content"
            />
          </div>
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 leading-relaxed text-gray-500">
            <ul className="list-disc flex flex-col gap-3 max-md:mx-2">
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Contract Administration:
                  </span>
                  We expertly manage all aspects of project contracts to ensure
                  smooth execution.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Quality Assurance Enforcement:
                  </span>
                  We uphold the highest standards of quality in every project we
                  undertake.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Issue Avoidance and Dispute Resolution:
                  </span>
                  Our experienced team can handle any issues that may arise,
                  resolving disputes effectively.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Progress and Financial Reporting:
                  </span>
                  We keep you informed with regular updates on project progress
                  and financial status.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Project Documentation and Digital File Maintenance:
                  </span>
                  We maintain accurate records and digital files for each
                  project, ensuring transparency and easy access to project
                  information.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Change Order Management:
                  </span>
                  We efficiently manage changes to project scope, ensuring
                  minimal disruptions and cost control.
                </p>
              </li>
              <li>
                <p>
                  <span className="text-primary font-medium block">
                    Contract Closeout:
                  </span>
                  We ensure that all project contracts are successfully closed,
                  leaving you with a completed project that meets your
                  expectations.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
