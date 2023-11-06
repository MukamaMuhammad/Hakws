import React from "react";

export const metadata = {
  title:
    "Contact Hakw Properties And Construction Uganda Ltd | Construction and Property Services in Uganda",
  description:
    "Get in touch with Hakw Properties And Construction Uganda Ltd for construction and property services in Uganda and Kampala. We specialize in construction services, electrical services, plumbing services, interior design services, ac installation and other services related to construction and properties.",
};

const page = () => {
  return (
    <section className="text-gray-600 body-font relative mt-10">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 w-[100%] max-sm:h-[22rem] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573209893076!2d32.60877567343958!3d0.31682849968007115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbd1d04b9b47%3A0x7839b0f4b9529f5a!2sHAKWPROPERTIES.CONSTRUCTION.UGLTD!5e0!3m2!1sen!2sug!4v1699176901263!5m2!1sen!2sug"
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md max-sm:hidden">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Bugolobi Industrial Area, 5th Street. Kampala, Uganda
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-primary leading-relaxed">
                hakwproperties.constructionugltd @gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+256-706737090, +256-703741020</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Got questions or ready to get started on your next project? We're
            here to help you every step of the way. Feel free to reach out to
            us.
          </p>
          <form
            action="https://formsubmit.co/hakwproperties.constructionugltd@gmail.com"
            method="POST"
          >
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-primary transition hover:bg-primary2 border-0 py-2 w-[100%] focus:outline-none rounded text-lg"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Whether you have inquiries, need a quote, or want to discuss your
            project, we're just a call or email away. Our dedicated team is
            eager to assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
