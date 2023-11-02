import React from "react";
import CircularBar from "./circularBar";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const About = () => {
  return (
    <section className="h-[auto] mx-3 md:mx-10 text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-5">About Me</h3>
      <p className="md:px-[14rem] md:max-xl:px-[4rem] leading-loose">
        As a dedicated web developer, I craft digital experiences that captivate
        and engage users. With a passion for coding, I create responsive,
        visually appealing websites that not only meet your needs but also rank
        high in search results. Let's collaborate to transform your ideas into a
        compelling online presence.
      </p>

      <div>
        <CircularBar />
      </div>

      <div className="mt-40 md:px-20 px-5 flex flex-col gap-5">
        <BiSolidQuoteAltRight className="text-7xl text-[#cf1f1f]" />
        <p className="md:text-3xl text-2xl text-start leading-relaxed">
          Do more than is required. What is the distance between someone who
          achieves their goals consistently and those who spend their lives and
          careers merely following? The extra mile.
        </p>
        <p className="text-start px-5 border-l-[1px] border-slate-500">
          Lolenti Muhammad
        </p>
      </div>
    </section>
  );
};

export default About;
