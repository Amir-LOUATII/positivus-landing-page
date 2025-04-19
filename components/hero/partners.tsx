import { partners } from "@/data/partners";
import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="flex justify-center items-center gap-x-20 gap-y-5  container mx-auto flex-wrap pt-16 px-1">
      {partners.map((partner) => (
        <Image
          src={partner.image}
          alt={partner.name}
          key={partner.name}
          className=" grayscale-100"
        />
      ))}
    </div>
  );
}
