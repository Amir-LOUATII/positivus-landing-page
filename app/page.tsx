import MainBanner from "@/components/banner/main-banner";
import CaseStudies from "@/components/case-studies/case-studies";
import Hero from "@/components/hero/hero";
import ServicesSection from "@/components/services/services-section";
import WorkingProcess from "@/components/working-process/working-process";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <MainBanner />
      <CaseStudies />
      <WorkingProcess />
    </>
  );
}
