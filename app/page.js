import Hero from "@components/hero";
import Section2 from "@components/Section2";
import Section3 from "@components/Section3";
import Section4 from "@components/Section4";
import Section5 from "@components/Section5";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
