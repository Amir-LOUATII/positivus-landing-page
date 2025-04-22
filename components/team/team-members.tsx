import React from "react";
import TeamMemberCard from "./team-member-card";
import teamMember1 from "@/assets/images/teamMember1.png";
import teamMember2 from "@/assets/images/teamMember2.png";
import teamMember3 from "@/assets/images/teamMember3.png";
import teamMember4 from "@/assets/images/teamMember4.png";
import teamMember5 from "@/assets/images/teamMember5.png";
import teamMember6 from "@/assets/images/teamMember6.png";
import { Button } from "../ui/button";
const teamMembers = [
  {
    id: 11,
    name: "John Smith",
    position: "CEO and Founder",
    image: teamMember1,
    description:
      "10+ years of experience in digital marketing, Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 12,
    name: "Jane Doe",
    image: teamMember2,
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 13,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    image: teamMember3,
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 14,
    name: "Emily Johnson",
    position: "PPC Manager",
    image: teamMember4,
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },

  {
    id: 16,
    name: "Brian Williams",
    image: teamMember5,
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 17,
    name: "Sarah Kim",
    position: "Content Creator",
    image: teamMember6,
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
export default function TeamMembers() {
  return (
    <div className="container  pt-20 mx-auto pb-24">
      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
      <Button className="block ms-auto mt-10 bg-dark hover:bg-dark text-white px-[76px]">
        See all team
      </Button>
    </div>
  );
}
