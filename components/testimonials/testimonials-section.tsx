import SectionHeader from "../shared/section-header";
import Testimonials from "./testimonials";

export default function TestimonialsSection() {
  return (
    <section className="w-full">
      <SectionHeader title="Testimonials">
        <div>
          <p>Hear from Our Satisfied Clients: Read Our Testimonials to</p>
          <p>Learn More about Our Digital Marketing Services</p>
        </div>
      </SectionHeader>
      <Testimonials />
    </section>
  );
}
