import SectionHeader from "../shared/section-header";
import Process from "./process";

export default function WorkingProcess() {
  return (
    <section className="w-full">
      <SectionHeader title="Our Working Process ">
        <div>
          <p>Step-by-Step Guide to Achieving</p>
          <p>Your Business Goals</p>
        </div>
      </SectionHeader>
      <Process />
    </section>
  );
}
