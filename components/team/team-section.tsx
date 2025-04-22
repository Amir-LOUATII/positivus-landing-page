import React from "react";
import SectionHeader from "../shared/section-header";
import TeamMembers from "./team-members";

export default function TeamSection() {
  return (
    <section className="w-full">
      <SectionHeader title="Team">
        <div>
          <p>Meet the skilled and experienced team behind our</p>
          <p>successful digital marketing strategies</p>
        </div>
      </SectionHeader>
      <TeamMembers />
    </section>
  );
}
