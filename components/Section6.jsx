import React from "react";
import Image from "next/image";
import client1 from "@public/client1.jpg";
import client2 from "@public/client2.jpg";
import Link from "next/link";

const Section6 = () => {
  return (
    <section class="text-gray-600 body-font py-10">
      <div class="container px-5  mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Clients
            </h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            At Hawk, our success thrives on the satisfaction of valued clients.
            Proudly serving a diverse range of clients, we've built strong
            relationships with those who entrust us with their construction and
            property management needs. Some of our privileged partnerships
            include:
          </p>
        </div>
      </div>
      <div class="w-full rounded-lg overflow-hidden flex items-center justify-center bg-primary py-5 px-5">
        <div className="lg:w-[70%] flex flex-col md:flex-row items-center justify-center rounded-lg">
          <Image
            class="object-center w-full md:h-[300px]"
            src={client1}
            alt="clients"
          />
          <Image
            class="object-center w-full md:h-[300px]"
            src={client2}
            alt="clients"
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
