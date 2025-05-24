import React from "react";
import ServiceCard from "./service-card";
import { CardVariant } from "@/utils/types";
import service1 from "@/assets/images/service1.png";
import service2 from "@/assets/images/service2.png";
import service3 from "@/assets/images/service3.png";
import service4 from "@/assets/images/service4.png";
import service5 from "@/assets/images/service5.png";
import service6 from "@/assets/images/service6.png";

const services = [
  {
    title: "Search engine",
    subtitle: "optimization",
    link: "Learn more",
    variant: "secondary",
    image: service1,
  },
  {
    title: "Social Media",
    subtitle: "Marketing",
    link: "Learn more",
    variant: "primary",
    image: service2,
  },
  {
    title: "Content",
    subtitle: "Creation",
    link: "Learn more",
    variant: "dark",
    image: service3,
  },
  {
    title: "Pay-per-click",
    subtitle: " advertising",
    link: "Learn more",
    variant: "secondary",
    image: service4,
  },
  {
    title: "Email",
    subtitle: "Marketing",
    link: "Learn more",
    variant: "primary",
    image: service5,
  },
  {
    title: "Analytics and ",
    subtitle: "Tracking",
    link: "Learn more",
    variant: "dark",
    image: service6,
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:mt-20">
      {services.map((service) => (
        <ServiceCard
          image={service.image}
          variant={service.variant as CardVariant}
          title={service.title}
          subtitle={service.subtitle}
          key={service.title}
        />
      ))}
    </div>
  );
}
