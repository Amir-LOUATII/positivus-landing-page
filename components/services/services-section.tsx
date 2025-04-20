import React from "react";
import SectionHeader from "../shared/section-header";
import Card from "../ui/card";

export default function ServicesSection() {
  return (
    <section className="py-[140px]">
      <SectionHeader title="Services">
        <div>
          <p>
            At our digital marketing agency, we offer a range of services to
          </p>
          <p>help businesses grow and succeed online.These services include:</p>
        </div>
      </SectionHeader>
      <Card variant="primary" shadow3D>
        <p>hello</p>
      </Card>
    </section>
  );
}
