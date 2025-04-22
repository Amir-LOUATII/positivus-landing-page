import SectionHeader from "../shared/section-header";
import Studies from "./studies";

export default function CaseStudies() {
  return (
    <section className="w-full">
      <SectionHeader title="Case Studies">
        <div>
          <p>Explore Real-Life Examples of Our Proven Digital Marketing</p>
          <p>Success through Our Case Studies</p>
        </div>
      </SectionHeader>
      <Studies />
    </section>
  );
}
