import { Button } from "../ui/button";
import HeroImage from "./hero-image";
import Partners from "./partners";

export default function Hero() {
  return (
    <section className="section">
      <div className="container mx-auto flex justify-between px-1 lg:px-4 gap-4">
        <div className="flex-1/2 ">
          {" "}
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-medium mb-9 max-md:px-3">
            Navigating the digital landscape for success
          </h1>
          <div className="md:hidden w-full max-w-full">
            <HeroImage />
          </div>
          <p className="text-lg leading-7 max-md:px-3">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button size="lg" className="mt-9 bg-dark text-white hover:bg-dark">
            <span className="text-lg normal-case">Book a consultation</span>
          </Button>
        </div>
        <div className="max-md:hidden flex-1/2 self-stretch">
          <HeroImage />
        </div>
      </div>
      <Partners />
    </section>
  );
}
