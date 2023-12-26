import React from "react";
import Image from "next/image";
import hero from "@public/01.jpg";
import About1 from "@public/about1.png";
import About2 from "@public/about2.png";
import About3 from "@public/about3.png";
import About4 from "@public/about4.png";
import About5 from "@public/about5.png";
import About6 from "@public/new-about.jpg";
import Link from "next/link";

export const metadata = {
  title:
    "About Hakw Properties And Construction Uganda Ltd | Construction and Property Services in Uganda",
  description:
    "Hakw Properties And Construction Uganda Ltd is a construction and property business that provides a wide range of services in Uganda and Kampala. We specialize in construction services, electrical services, plumbing services, interior design services, ac installation and other services related to construction and properties.",
};

const page = () => {
  return (
    <>
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0 text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-start">
              Bringing <span classNameName="text-primary">Your</span> Ideas and{" "}
              <br className="hidden lg:inline-block" />
              Innovations to Life
            </h1>
            <p className="mb-8 leading-relaxed text-start">
              Our professional team is committed to providing sustainable,
              creative & efficient engineering solutions for our communities
            </p>
            <ul className="list-disc list-inside mb-8 text-start">
              <li>Making lives easier</li>
              <li>Get every solution right here</li>
              <li>Innovation and creativity</li>
              <li>Fine engineering only with us</li>
            </ul>
            <div className="flex justify-center">
              <Link href={"/contact"}>
                <button className="inline-flex text-white bg-primary transition hover:bg-primary2 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                  Consult Now
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[100%]">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex max-md:flex-col gap-16 justify-center items-center mb-16">
            <Image
              alt="content"
              class="object-cover object-center h-full rounded md:w-1/2 w-full max-md:order-2"
              src={About6}
            />
            <div className="md:w-1/2 w-full">
              <p className="leading-relaxed text-base">
                At Hakw Properties and Construction UG Limited, we are more than
                just a construction and property management company; we are a
                team dedicated to a vision and mission that drives our
                commitment to excellence. Our company is located in Bugolobi
                Industrial Area, 5th Street, and we offer a wide range of
                services in the construction and property management industry.
                Our team of skilled professionals takes pride in managing and
                executing projects from inception to completion while adhering
                to our core values
              </p>
            </div>
          </div>

          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Our Mission
            </h1>
            <div className="flex my-5 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our mission is simple but profound: to deliver high-quality
              services in construction and property management, transforming our
              clients' visions into reality. With Hawk, you're not just a
              client; you're a partner in our journey to excellence.
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Our Vision
              </h2>
              <div className="flex my-3 justify-start">
                <div className="w-10 h-[2px] rounded-full bg-primary inline-flex"></div>
              </div>
              <p className="leading-relaxed text-base mb-4">
                To lead in construction and property management, and set
                industry standards for quality, innovation, and customer
                satisfaction.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Our Story
              </h2>
              <div className="flex my-3 justify-start">
                <div className="w-10 h-[2px] rounded-full bg-primary inline-flex"></div>
              </div>
              <p className="leading-relaxed text-base mb-4">
                Our story evolves from humble beginnings to becoming a renowned
                name in the construction industry, defined by excellence.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Our Team
              </h2>
              <div className="flex my-3 justify-start">
                <div className="w-10 h-[2px] rounded-full bg-primary inline-flex"></div>
              </div>
              <p className="leading-relaxed text-base mb-4">
                Our team includes dedicated experts who drive our vision,
                expertise, and unwavering commitment to every project we
                undertake.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Core Values
              </h2>
              <div className="flex my-3 justify-start">
                <div className="w-10 h-[2px] rounded-full bg-primary inline-flex"></div>
              </div>
              <p className="leading-relaxed text-base mb-4">
                Excellence, innovation, and quality are the cornerstones of our
                approach, guiding each endeavor to deliver outstanding results.
              </p>
            </div>
          </div>

          <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class="md:w-1/3 mb-10 px-4">
                  <div class="rounded-lg overflow-hidden">
                    <Image
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src={About1}
                    />
                  </div>
                  <p class="mt-5 leading-relaxed text-base">
                    We're your dedicated partners in turning aspirations into
                    remarkable, enduring structures.
                  </p>
                </div>
                <div class="md:w-1/3 mb-10 px-4">
                  <div class="rounded-lg overflow-hidden">
                    <Image
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src={About2}
                    />
                  </div>
                  <p class="mt-5 leading-relaxed text-base">
                    Our experienced team collaborates to create exceptional
                    spaces tailored to your aspirations.
                  </p>
                </div>
                <div class="md:w-1/3 mb-10 px-4">
                  <div class="rounded-lg overflow-hidden">
                    <Image
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src={About3}
                    />
                  </div>
                  <p class="mt-5 leading-relaxed text-base">
                    We strive to make a meaningful difference in the communities
                    where we work.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
