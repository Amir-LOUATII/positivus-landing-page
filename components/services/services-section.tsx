import SectionHeader from "../shared/section-header";
import Services from "./services";

export default function ServicesSection() {
  return (
    <section className="section ">
      <SectionHeader title="Services">
        <div>
          <p>
            At our digital marketing agency, we offer a range of services to
          </p>
          <p>help businesses grow and succeed online.These services include:</p>
        </div>
      </SectionHeader>
      <Services />
    </section>
  );
}
