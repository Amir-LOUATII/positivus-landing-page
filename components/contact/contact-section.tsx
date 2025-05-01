import SectionHeader from "../shared/section-header";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section className="w-full px-3.5 container">
      <SectionHeader title="Contact Us">
        <div>
          <p>{"Connect with Us: Let's Discuss Your"}</p>
          <p> Digital Marketing Needs</p>
        </div>
      </SectionHeader>
      <ContactForm />
    </section>
  );
}
